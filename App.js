import React from 'react'
import { StyleSheet, View, Text, TextInput, Button} from 'react-native'

const LoginScreen = () => {
  return ( 
    <View style={styles.appPage}><>
      <View>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Password'/>
        </View>

     </><View>
       <Button title= "Login"/>
       <Button title= "Sigh Up"/>
      </View></View>
  )
};


const styles = StyleSheet.create({
  appPage: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
export default LoginScreen