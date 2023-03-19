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
import coursepage from "./coursepage";
import homepage from "./homepage";
import signuppage from "./signuppage";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homepage" component={homepage} />
      <Stack.Screen name="signuppage" component={signuppage} />
      <Stack.Screen name= "coursepage" component={coursepage} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
