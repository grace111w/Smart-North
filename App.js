import React from 'react'
import { View, Text, TextInput, Button} from 'react-native'

const LoginScreen = () => {
  return ( 
    <><>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen!</Text>
        </View>

</><View style={{ flex: 1, justifyContent: 'space-around', alignContent: 'center'}}>
        <TextInput placeholder='Email' />
        <Button title='Login'/>
      </View></>
  )
};
export default LoginScreen