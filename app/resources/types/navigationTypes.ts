import { RouteProp } from '@react-navigation/native'

export interface NavigationProviderProps { }

export interface NavigationContextProps {
  currentRoute: RouteProp<Record<string, object | undefined>, string> | undefined
}

export const NavigationContextDefaultProps: NavigationContextProps = {
  currentRoute: undefined,
}
