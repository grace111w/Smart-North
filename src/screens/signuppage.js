import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { auth } from "../../FireBaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
  StyleSheet,
  Button,
  Text,
  View,
  style,
  SafeAreaView,
  TextInput,
} from "react-native";

const Signuppage = () => {
  const [value, setValue] = React.useState({
    userName: "",
    email: "",
    password: "",
    error: "",
  });

  const handleSignUp = (props) => {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
        props.navigation.navigate("homepage");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.appPage}>
        <View>
          <TextInput
            style={styles.textstuff}
            placeholder="Email"
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
          <TextInput
            style={styles.textstuff}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>
        <View>
          <Button onPress={handleSignUp} title="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "baseline",
    justifyContent: "center",
  },
  appPage: {
    backgroundColor: "#c3dbfa",
    marginBottom: 5,
    marginTop: 5,
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});

export default Signuppage;
