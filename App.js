import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.text}>Всем привет я работа 2.7</Text>
      <Text style={styles.text}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
    bottom: -100,
    
  }
})