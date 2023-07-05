import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./src/screens/homepage";
import coursepage from "./src/screens/coursepage";
import coursepagedeerriver from "./src/screens/coursepagedeerriver";
import cybersign from "./src/screens/cybersign";
import cybersecurity101 from "./src/screens/cybersecurity101";
import Registration from "./src/screens/Registration";
import Loginpage from "./src/screens/Loginpage";
import generalinfo from "./src/screens/generalinfo";
import admin from "./src/screens/admin";
import userinfo from "./src/screens/userinfo";
import page1 from "./src/screens/page1";
import adminlogin from "./src/screens/adminlogin";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={page1} />
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
        name="cybersign"
        component={cybersign}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="generalinfo"
        component={generalinfo}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="userinfo"
        component={userinfo}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="admin"
        component={admin}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="adminlogin"
        component={adminlogin}
        options={{
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Loginpage}
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
