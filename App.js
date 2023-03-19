import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./homepage";
import loginpage from "./loginpage";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
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
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return(
    <NavigationContainer> 
    </NavigationContainer>
  );
};