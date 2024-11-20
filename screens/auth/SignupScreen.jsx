import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupScreen = () => {
  return (
    <View style={ styles.container}>
      <Text>SignupScreen</Text>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})