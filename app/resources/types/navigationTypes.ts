import { RouteProp } from '@react-navigation/native'
import { ReactNode } from 'react'

export interface NavigationProviderProps {
  children: ReactNode
}


export interface NavigationContextProps {
  currentRoute: RouteProp<Record<string, object | undefined>, string> | undefined
}

export const NavigationContextDefaultProps: NavigationContextProps = {
  currentRoute: undefined,
}
