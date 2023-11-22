import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTabBar from '../components/CustomTabBar'
import { calculateResponsiveSize } from '../utils/dimensions'
import HomeJourneyNavigator from './HomeJourneyNavigator'
import ProfileJourneyNavigator from './ProfileJourneyNavigator'
import SettingsJourneyNavigator from './SettingsJourneyNavigator'

const Tab = createBottomTabNavigator()

const tabOptions = {
  home: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={styles.tabIcon}>☄️</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
  profile: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={styles.tabIcon}>🐸</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
  settings: {
    tabBarIcon: (props: any) => (
      <View style={styles.tabContent}>
        <Text style={styles.tabIcon}>🛸</Text>
        <View style={[styles.activeDot, { opacity: props.focused ? 1 : 0 }]} />
      </View>
    ),
  },
}

const TabsNavigator = () => {
  const tabScreenOptions = () => ({
    tabBarStyle: {
      backgroundColor: 'transparent',
      height: calculateResponsiveSize(70, 'height'),
      borderTopWidth: 0,
      elevation: 0,
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#DEf31d',
    tabBarInactiveTintColor: '#0030f0',
  })

  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      initialRouteName={'ProfileJourney'}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={tabScreenOptions}>
      <Tab.Screen
        key={'HomeJourney'}
        name={'HomeJourney'}
        options={tabOptions.home}
        component={HomeJourneyNavigator}
      />
      <Tab.Screen
        key={'ProfileJourney'}
        name={'ProfileJourney'}
        options={tabOptions.profile}
        component={ProfileJourneyNavigator}
      />
      <Tab.Screen
        key={'SettingsJourney'}
        name={'SettingsJourney'}
        options={tabOptions.settings}
        component={SettingsJourneyNavigator}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabContent: {
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: calculateResponsiveSize(30),
  },
  activeDot: {
    alignSelf: 'center',
    backgroundColor: '#fbeda5',
    width: calculateResponsiveSize(4),
    height: calculateResponsiveSize(4, 'height'),
    borderRadius: calculateResponsiveSize(2),
    marginTop: calculateResponsiveSize(4, 'height'),
  },
})
