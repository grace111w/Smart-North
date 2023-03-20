import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./homepage";
import signuppage from "./signuppage";
import coursepage from "./coursepage";
// import { auth } from "./FireBaseconfig";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homepage" component={homepage} />
      <Stack.Screen name="signuppage" component={signuppage} />
      <Stack.Screen name="coursepage" component={coursepage} />
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
