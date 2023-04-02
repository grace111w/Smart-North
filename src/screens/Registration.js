import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  data,
  styles,
  styler,
} from "react-native";
import {
  Dropdown }
  from 'react-native-material-dropdown';
import Input from "../component/Input";
import { auth } from "../../FireBaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Registration() {
  const [value, setValue] = React.useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    error: "",
  });

  const handleSignUp = (props) => {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
        props.navigation.navigate("homepage");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleOnChange = (text, value) => {
    setValue((prevState) => ({ ...prevState, [value]: text }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.textFitle}> Registration Form</Text>
        <Input
          label="Email address"
          iconName="envelope-square"
          placeholder="Email"
          onChangeText={(text) => handleOnChange(text, "email")}
        />
        <Input
          label="Preferred Name"
          iconName="user"
          placeholder="FirstName LastName"
          onChangeText={(text) => handleOnChange(text, "userName")}
        />
       
          
             
              {this.props.menuItem}
              onChangeText={
                (value) => {
                  this.setValue({
                    selectedValue: 'she/her',
                    selectedValue: 'he/him',
                    selectedValue: 'they/them',
                    selectedValue: 'other',
                  });
                   }
              } 
    containerStyle={
              styles.dropdownStyle}

        <Input
          label="Password"
          iconName="key"
          password
          placeholder="password"
          onChangeText={(text) => handleOnChange(text, "password")}
        />
        <View>
          <Button onPress={handleSignUp} title="Sign Up" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styler = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContainer: {
    padding: 45,
    paddingHorizontal: 20,
  },
  textFitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 20,
  },
});
