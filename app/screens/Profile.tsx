import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getRandomHexColorWithGreen } from '../utils/colors'
import { calculateResponsiveSize } from '../utils/dimensions'

const Profile = () => {
  const background: string = getRandomHexColorWithGreen()

  return (
    <View style={[styles.profileContainer, { backgroundColor: background }]}>
      <Text style={styles.centeredTitle}>🐸</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTitle: {
    fontSize: calculateResponsiveSize(100),
  }
})