import React from "react";
import {
  View,
  Text,
  styles,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image
} from "react-native";
import {
  Dropdown }
  from 'react-native-material-dropdown';
import Input from "../component/Input";
import { auth } from "../../FireBaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireBaseconfig";
import smart from "../img/smart_north.png";
export default function Registration(props) {
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
        saveUserProfile();
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const saveUserProfile = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        age: 17,
        school: "wayzata",
        grade: 10,
        phone: 5072061790
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const handleOnChange = (text, value) => {
    setValue((prevState) => ({ ...prevState, [value]: text }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Image source={smart}></Image>
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
    style={styler.dropdownStyle}

        <Input
          label="Password"
          iconName="key"
          password
          placeholder="password"
          onChangeText={(text) => handleOnChange(text, "password")}
        />
        <View>
          <Pressable style={styles.button} onPress={handleSignUp} >
            <Text style={styles.textButton}>Register</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styler = StyleSheet.create ({
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
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: '#2196F3'
  },
  textButton: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
