import { useLinkProps } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Input = ({ label, iconName, password, onfocus = () => {}, ...props }) => {
  const [hidepasword, setHidepassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text> {label}</Text>
      <View
        style={[
          styles.input,
          { borderColor: isFocused ? "475467" : "a4c8ff" },
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
        <TextInput
          onFocus={() => {
            onfocus;
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={styles.textInput}
          secureTextEntry={hidepasword}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidepassword(!hidepasword)}
            name={hidepasword ? "eye" : "eye-slash"}
            style={styles.icon}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#c3dbfa',
  },
  input: {
    backgroundColor: '#a4c8ff',
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.75,
    borderRadius: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 25,
    color: '#c3dbfa',
    //marginTop
  },
  textInput: {
    color: '#475467',
    flex: 1,
    marginLeft: 10,
  },
  eyeIcon: {
    fontSize: 15,
    color: '#475467',
  },
});

export default Input;
