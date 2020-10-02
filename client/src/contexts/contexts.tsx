import React, { PropsWithChildren } from 'react'
import RelayContext from './relay'

interface IProps { }

const AppProvider = ({ children }: PropsWithChildren<IProps>) => {
  return (
    <RelayContext>
      {children}
    </RelayContext>
  )
}

export default AppProvider
