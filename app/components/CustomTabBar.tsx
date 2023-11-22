import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'
import { calculateResponsiveSize } from '../utils/dimensions'
import { isAndroid } from '../utils/platform'

type CustomTabBarProps = {
  insets: EdgeInsets
}

const CustomTabBar: React.FC<BottomTabBarProps & CustomTabBarProps> = (props) => {
  const { bottom } = props.insets

  return (
    <View style={[styles.tabBarContainer, { marginBottom: calculateResponsiveSize(bottom, 'height') }]}>
      <BlurView
        tint='dark'
        intensity={30}>
        <BottomTabBar {...props} />
      </BlurView>
    </View>
  )
}

export default CustomTabBar


const styles = StyleSheet.create({
  tabBarContainer: {
    left: 0,
    right: 0,
    bottom: isAndroid ? calculateResponsiveSize(16, 'height') : 0,
    borderWidth: 1,
    borderRadius: calculateResponsiveSize(12),
    marginHorizontal: calculateResponsiveSize(20, 'width'),
    position: 'absolute',
    overflow: 'hidden',
    borderColor: 'transparent',
    justifyContent: 'center',
  },
})