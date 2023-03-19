import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

const LoginScreen = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
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
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 2,
              }}
              placeholder="Password"
            />
          </View>
        </>
        <View>
          <Button title="Login" />
          <Button title="Sign Up" />
        </View>
        <View>
            <Button
              title="Next Page"
              color="#841584"
            />
    </View>
      </View>
    </SafeAreaView>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  appPage: {
    flex: 1,
    padding: 50,
    backgroundColor: "#c3dbfa",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
export default LoginScreen;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

