import React from 'react'
import { StyleSheet, View, Text, TextInput, Button} from 'react-native'

const LoginScreen = () => {
  return ( 
    <><>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen!</Text>
        </View>

</><View>
        <TextInput style= {{margin: 20}} placeholder='Email' />
        <Button title='sigh up'/>
      </View></>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "baseline",
    justifyContent: "center",
  },
});
export default LoginScreen