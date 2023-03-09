import EventEmitter from 'eventemitter3'
import WebSocket from 'isomorphic-ws'
import axios from 'axios'
import Deferred from 'promise-deferred'

/**
 * Provider Methods
 */
export enum WalletMethod {
  eth_requestAccounts = 'eth_requestAccounts',
  eth_accounts = 'eth_accounts',
  eth_sendTransaction = 'eth_sendTransaction',
  eth_signTransaction = 'eth_signTransaction',
  personal_sign = 'personal_sign',
  signTypedData = 'signTypedData',
  signTypedData_v1 = 'signTypedData_v1',
  signTypedData_v3 = 'signTypedData_v3',
  signTypedData_v4 = 'signTypedData_v4',
  eth_subscription = 'eth_subscription',
}

/**
 * Provider Errors
 */
export class ProviderRpcError extends Error {
  public readonly code: number
  public readonly data?: unknown
  constructor(
    message: string,
    {
      code,
      data,
    }: {
      code: number
      data?: unknown
    },
  ) {
    super(message)
    this.code = code
    this.data = data
  }
}

/**
 * Provider Events
 */

export interface ProviderConnectInfo {
  readonly chainId: string
}

export interface ProviderMessage {
  readonly type: string
  readonly data: unknown
}

export interface EthSubscription extends ProviderMessage {
  readonly type: 'eth_subscription'
  readonly data: {
    readonly subscription: string
    readonly result: unknown
  }
}

export interface WalletEvents {
  connect({ chainId }: ProviderConnectInfo): unknown
  disconnect(error: ProviderRpcError): unknown
  accountsChanged(accounts: Array<string>): unknown
  chainChanged(chainId: string): unknown
  message({ type, data }: ProviderMessage): unknown
}

/**
 * Http Provider
 */
export class HttpProvider extends EventEmitter<WalletEvents> {
  public isMetaMask: boolean = true
  public isConnecting: boolean = true
  private connected: boolean = false
  private rpc: string =
    'https://mainnet.infura.io/v3/783c24a3a364474a8dbed638263dc410'

  constructor() {
    super()
  }

  isConnected = () => {
    return this.connected
  }

  // Http
  request = async ({ method, params }: RequestArguments) => {
    if (!this.connected) throw new Error('The socket is not connected')
    const id = Date.now().toString()
    const data = { jsonrpc: '2.0', id, method, params }
    const {
      data: { result },
    } = await axios.post(this.rpc, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return result
  }
}

/**
 * Provider Request Arguments
 */
export interface RequestArguments {
  readonly method: string
  readonly params?: readonly unknown[] | object
}

export class WsProvider extends EventEmitter<WalletEvents> {
  public isMetaMask: boolean = true
  public isConnecting: boolean = true
  private connected: boolean = false
  private ws = new WebSocket(
    'wss://mainnet.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410',
  )

  private promises: Record<string, any> = {}

  constructor() {
    super()

    this.ws.onopen = () => {
      this.isConnecting = false
      this.connected = true
      this.emit('connect', { chainId: '0x1' })
    }
    this.ws.onclose = () => {
      return this.emit(
        'disconnect',
        new ProviderRpcError(
          'The Provider is not connected to the requested chain.',
          {
            code: 4009,
          },
        ),
      )
    }
    this.ws.onmessage = ({ data }: { data: string }) => {
      const { id, method, result, params } = JSON.parse(data)
      if (id && this.promises[id]) {
        this.promises[id].resolve(result)
        delete this.promises[id]
      }
      if (method) this.emit('message', { type: method, data: params })
    }
  }

  isConnected = () => {
    return this.connected
  }

  request = ({ method, params }: RequestArguments) => {
    const id = Date.now().toString()
    if (this.promises[id]) throw new Error('The request id has been sent')
    this.promises[id] = new Deferred()
    const data = { jsonrpc: '2.0', id, method, params }
    console.log(data)
    const interval: NodeJS.Timer = setInterval(() => {
      if (this.connected) {
        this.ws.send(JSON.stringify(data))
        return clearInterval(interval)
      }
    }, 1000)
    return this.promises[id].promise
  }
}
