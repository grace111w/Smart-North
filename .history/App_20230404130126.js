import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./src/screens/homepage";
import coursepage from "./src/screens/coursepage";
import Registration from "./src/screens/Registration";
import Loginpage from "./src/screens/Loginpage";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={homepage} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="coursepage" component={coursepage} />
      <Stack.Screen name="userinfo" component={userinfo} />
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
