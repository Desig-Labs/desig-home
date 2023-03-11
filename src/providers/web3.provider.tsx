import { Fragment, ReactNode, useEffect } from 'react'
import isEqual from 'react-fast-compare'
import Web3 from 'web3'
import { create } from 'zustand'

import { useLoading } from './ui.provider'

/**
 * Store
 */

export type Web3Store = {
  web3?: Web3
  setWeb3: (web3?: Web3) => void
}

export const useWeb3Store = create<Web3Store>()((set) => ({
  web3: undefined,
  setWeb3: (web3?: Web3) => set({ web3 }),
}))

/**
 * Hook
 */

export const useWeb3 = () => {
  const web3 = useWeb3Store(({ web3 }) => web3, isEqual)
  return web3
}

/**
 * Provider
 */

export default function Web3Provider({ children }: { children: ReactNode }) {
  const setWeb3 = useWeb3Store(({ setWeb3 }) => setWeb3)
  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)
    let retries = 3
    const clear = () => {
      clearInterval(id)
      setLoading(false)
    }
    const id: NodeJS.Timer = setInterval(() => {
      if (window.ethereum) setWeb3(new Web3(window.ethereum))
      if (!!window.ethereum || retries-- <= 0) clear()
    }, 1000)
    return clear
  }, [setWeb3, setLoading])

  return <Fragment>{children}</Fragment>
}
