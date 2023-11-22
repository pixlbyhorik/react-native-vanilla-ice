import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getRandomHexColorWithDarkBlue } from '../utils/colors'
import { calculateResponsiveSize } from '../utils/dimensions'

const Settings = () => {
  const background = getRandomHexColorWithDarkBlue()

  return (
    <View style={[styles.settingsContainer, { backgroundColor: background }]}>
      <Text style={styles.centeredTitle}>🛸</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTitle: {
    fontSize: calculateResponsiveSize(100),
  }
})