import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import coursepage from "./coursepage";
import { NavigationContainer } from "@react-navigation/native";

const homepage = (props) => {
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
          <Button
            onPress={() => props.navigation.navigate("signuppage")}
            title="Sign Up"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appPage: {
    flex: 1,
    padding: 50,
    backgroundColor: "#c3dbfa",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});
export default homepage;
