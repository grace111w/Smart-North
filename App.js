import React from 'react'
import { View, Text, TextInput, } from 'react-native'

const LoginScreen = () => {
  return (
  <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Login Screen</Text>
</View>

<View>
  <TextInput placeholder='Email'/>

</View></>
  )
  }
export default LoginScreen