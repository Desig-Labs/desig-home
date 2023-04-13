import dynamic from 'next/dynamic'
import { Fragment, ReactNode } from 'react'

export default dynamic(
  () =>
    Promise.resolve(({ children }: { children: ReactNode }) => {
      return <Fragment>{children}</Fragment>
    }),
  { ssr: false },
)
