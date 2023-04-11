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
    < SafeAreaView>
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
      <View style={style.appPage}/>
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
        </View>
        <View>
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
