import React from 'react'
import { StyleSheet, View, Text, TextInput, Button} from 'react-native'

const LoginScreen = () => {
  return ( 
    <><>
      <View>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Password'/>
        </View>

</><View>
       <Button title= "Login"/>
       <Button title= "Sigh Up"/>
      </View></>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen