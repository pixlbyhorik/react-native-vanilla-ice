import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getRandomHexColorWithCoral } from '../utils/colors'
import { calculateResponsiveSize } from '../utils/dimensions'

const Home = () => {
  const background: string = getRandomHexColorWithCoral()

  return (
    <View style={[styles.homeContainer, { backgroundColor: background }]}>
      <Text style={styles.centeredTitle}>☄️</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  centeredTitle: {
    fontSize: calculateResponsiveSize(100),
  }
})