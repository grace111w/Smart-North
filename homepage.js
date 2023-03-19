import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import coursepage from "./coursepage";
import { NavigationContainer } from "@react-navigation/native";

const homepage = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.appPage}>
        <>
          <View>
            <TextInput
              style={styles.textstuff}
              placeholder="Email"
            />
            <TextInput
              style={styles.textstuff}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </>
        <View>
          <Button title="Login" />
          <Button
            onPress={() => props.navigation.navigate("signuppage")}
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
}
});
const styles = StyleSheet.create({
  appPage: {
    padding: 500,
    backgroundColor: "#c3dbfa",
    alignItems: "center",
    justifyContent: "flex-start",
  },


});
export default homepage;
