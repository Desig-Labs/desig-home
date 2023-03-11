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
  const web3 = useWeb3()
  const setWeb3 = useWeb3Store(({ setWeb3 }) => setWeb3)
  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(!web3)
  }, [web3, setLoading])

  useEffect(() => {
    let retries = 5
    const id: NodeJS.Timer = setInterval(() => {
      --retries
      if (retries <= 0) return clearInterval(id)
      if (window.ethereum) {
        setWeb3(new Web3(window.ethereum))
        return clearInterval(id)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [setWeb3, setLoading])

  return <Fragment>{children}</Fragment>
}
