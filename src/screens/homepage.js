import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  style,
  Button,
  SafeAreaView,
} from "react-native";
import {
  Dropdown }
  from 'react-native-material-dropdown';

const homepage = (props) => {
  return (
    <SafeAreaView>
<<<<<<< HEAD
      <View >
        <>
          <View>
            <TextInput style={styles.textstuff} placeholder="Email" />
            <TextInput
              style={styles.textstuff}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </>
=======
      <View style={style.appPage}>
>>>>>>> 4c220a1aca7c58256e0a19a7d3df00bf48d7639d
        <View>
          <TextInput style={styles.textstuff} placeholder="Email" />
          <TextInput
            style={styles.textstuff}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button
            onPress={() => props.navigation.navigate("Login")}
            title="Login"
          />
          <Button
            onPress={() => props.navigation.navigate("Registration")}
            title="Sign Up"
          />
        </View>
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepage")}
            title="Next Page"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textstuff: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
  },
  
});
export default homepage;
