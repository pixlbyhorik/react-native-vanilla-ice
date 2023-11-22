import { NavigationContainer, Route, createNavigationContainerRef } from '@react-navigation/native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { NavigationContextDefaultProps, NavigationContextProps, NavigationProviderProps } from '../resources/types/navigationTypes'
import LoggerService from '../services/LoggerService'

type RootStackParamList = {
  HomeScreen: undefined
  ProfileScreen: undefined
  SettingsScreen: undefined
}

type RouteName = keyof RootStackParamList

export const navigateToScreen = <T extends RouteName>(
  screen: T,
  params?: RootStackParamList[T]
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params)
  }
}

const NavigationContext = createContext<NavigationContextProps>(NavigationContextDefaultProps)

const navigationRef = createNavigationContainerRef<RootStackParamList>()

const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<Route<string, Object | undefined> | undefined>(undefined)

  const handleStateChange = useCallback(() => {
    setCurrentRoute(navigationRef.current?.getCurrentRoute())
  }, [])

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', handleStateChange)

    return () => unsubscribe()
  }, [handleStateChange])

  const contextValue = useMemo(() => ({ currentRoute }), [currentRoute])

  useEffect(() => {
    if (currentRoute) {
      LoggerService.info(`You are currently on - ${currentRoute?.name} - with`, currentRoute)
    }
  }, [currentRoute])

  return (
    <NavigationContext.Provider value={contextValue}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => setCurrentRoute(navigationRef.current?.getCurrentRoute)}
      >
        {children}
      </NavigationContainer>
    </NavigationContext.Provider>
  )
}

const useNavigationState = () => useContext(NavigationContext)

export default NavigationProvider
export { useNavigationState }

