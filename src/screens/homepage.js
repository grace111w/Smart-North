import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

const Homepage = (props) => {
  return (
    <SafeAreaView>
      <View style={style.appPage}>
        <>
          <View>
            <TextInput style={styles.textstuff} placeholder="Email" />
            <TextInput
              style={styles.textstuff}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </>
        <View>
          <Button title="Login" />
          <Button
            onPress={() => props.navigation.navigate("Registration")}
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
  textstuff: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
  },
});

const style = StyleSheet.create({
  appPage: {
    backgroundColor: "#c3dbfa",
    marginBottom: 5,
    marginTop: 5,
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});
export default Homepage;
