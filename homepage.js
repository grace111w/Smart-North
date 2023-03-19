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
      <View style={styles.appPage}>
        <>
          <View>
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
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepage")}
            title="Next Page"
            />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appPage: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "center",
    justifyContent: "flex-start",
  },


});
export default homepage;
