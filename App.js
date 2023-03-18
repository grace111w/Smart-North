import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <>
        <View style={styles.appPage}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 2,
            }}
            placeholder="Email"
          />
          <TextInput placeholder="Password" />
        </View>
      </>
      <View>
        <Button title="Login" />
        <Button title="Sign Up" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appPage: {
    flex: 1,
    padding: 50,
    backgroundColor: "#c3dbfa",
    alignItems: "stretch",
    justifyContent: "center",
    color: "black",
  },
});
export default LoginScreen;
