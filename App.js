import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./src/screens/homepage";
import coursepage from "./src/screens/coursepage";
import coursepagedeerriver from "./src/screens/coursepagedeerriver";
import signupcyber from "./scr/screens/signupcyber";
import cybersecurity101 from "./src/screens/cybersecurity101";
import Registration from "./src/screens/Registration";
import Loginpage from "./src/screens/Loginpage";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="Registration" component={Registration} />
      {/* <Stack.Screen name="Homepage" component={homepage} /> */}
      <Stack.Screen
        name="coursepage"
        component={coursepage}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="coursepagedeerriver"
        component={coursepagedeerriver}
        options={{
          headerLeft: () => <></>,
        }}
      />
       <Stack.Screen
        name="cybersecurity101"
        component={cybersecurity101}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="signupcyber"
        component={signupcyber}
        options={{
          headerLeft: () => <></>,
        }}
      />
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
