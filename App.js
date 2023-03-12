import React from 'react'
import { View, Text, TextInput, SafeAreaView} from 'react-native'

const LoginScreen = () => {
  return (
  <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Login Screen</Text>
</View>

<View>
  <SafeAreaView>
  <TextInput placeholder='Email'/>
</View>
</SafeAreaView>
  )
  }
export default LoginScreen