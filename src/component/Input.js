import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.appPage}>
      <View>
        <TextInput
          style={styles.textstuff}
          placeholder="Email"
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <TextInput
          style={styles.textstuff}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setValue({ ...value, password: text })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "baseline",
    justifyContent: "center",
  },
  appPage: {
    backgroundColor: "#c3dbfa",
    marginBottom: 5,
    marginTop: 5,
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});

export default Input;
