import React from 'react'
import { View, Text, TextInput, Button} from 'react-native'

const LoginScreen = () => {
  return ( 
    <><>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen!</Text>
        </View>

</><View>
        <TextInput style= {{margin: 200 }} placeholder='Email' />
        <Button title='sigh up'/>
      </View></>
  )
};
export default LoginScreen