import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
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
    age: "",
    pronouns: "",
    phone: "",
    dob: "",
    grade: "",
    school: "",
    tech_hub: "",
  });

  const handleSignUp = () => {
    console.log(value);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
        saveUserProfile(user);
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const saveUserProfile = async (prop) => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        //userid: prop.uid,
        age: value.age,
        userName: value.userName,
        school: value.school,
        grade: value.grade,
        phone: value.phone,
        pronouns: value.pronouns,
        dob: value.dob,
        tech_hub: value.tech_hub,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleOnChange = (text, value) => {
    setValue((prevState) => ({ ...prevState, [value]: text }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.textFitle}> Sign Up</Text>
        <Input
          label="Full Name"
          iconName="user"
          placeholder="FirstName LastName"
          onChangeText={(text) => handleOnChange(text, "userName")}
        />
        <Input
          label="pronouns"
          placeholder="pronouns"
          onChangeText={(text) => handleOnChange(text, "pronouns")}
        />
        <Input
          label="age"
          placeholder="age"
          onChangeText={(text) => handleOnChange(text, "age")}
        />
        <Input
          label="Email address"
          iconName="envelope-square"
          placeholder="Email"
          onChangeText={(text) => handleOnChange(text, "email")}
        />
        <Input
          label="Password"
          iconName="key"
          password
          placeholder="password"
          onChangeText={(text) => handleOnChange(text, "password")}
        />
        <Input
          label="Parent Phone Number"
          iconName="mobile-alt"
          placeholder="Phone Number"
          onChangeText={(text) => handleOnChange(text, "phone")}
        />
        <Input
          label="Date of Birth"
          iconName="calender"
          placeholder="01/01/23"
          onChangeText={(text) => handleOnChange(text, "dob")}
        />
        <Input
          label="Grade Level"
          iconName=""
          placeholder="Grade Level"
          onChangeText={(text) => handleOnChange(text, "grade")}
        />
        <Input
          label="School"
          iconName=""
          placeholder="School"
          onChangeText={(text) => handleOnChange(text, "school")}
        />
        <Input
          label="Primary Tech Hub"
          iconName=""
          placeholder="Minneapolis / Deer River"
          onChangeText={(text) => handleOnChange(text, "tech_hub")}
        />
        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={styles.textButton}>Register</Text>
        </Pressable>
        <View>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
        </View>

        <View />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c3dbfa",
    flex: 1,
  },
  scrollContainer: {
    padding: 45,
    paddingHorizontal: 20,
  },
  textFitle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#475467",
  },

  button: {
    borderWidth: 0.5,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#f38120",
  },
  textButton: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
