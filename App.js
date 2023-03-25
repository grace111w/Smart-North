import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./src/screens/homepage";
import signuppage from "./src/screens/signuppage";
import coursepage from "./src/screens/coursepage";
import { auth } from "./FireBaseconfig";
import Registration from "./src/screens/Registration";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homepage" component={homepage} />
      <Stack.Screen name="Registration" component={Registration} />

      {/* <Stack.Screen name="signuppage" component={signuppage} /> */}
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
