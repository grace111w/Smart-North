import { View, Text, SafeAreaView, StyleSheet, Button, ScrollView, img } from "react-native";
import React from "react";
import Input from "../component/Input";
import { auth } from "../../FireBaseconfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import smart from "../img/smart_north.png";
const Loginpage = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState(null);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  /*  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) props.navigation.navigate("coursepage");
    });
    return unsubscribe;
  }, []); */
  React.useEffect(() => {
    const unscribie = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        props.navigation.navigate("coursepage");
      } else setUser(undefined);
    });
    return unscribie;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <img source={smart}></img>
        <Text style={styles.textFitle}> Login Form</Text>
        <Input
          label="Email address"
          iconName="envelope-square"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          iconName="key"
          placeholder="Password"
          password
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <Button style={styles.button} onPress={handleLogin} title="Login" />
        </View>
        <View>
          <Button style={styles.button}
            onPress={() => props.navigation.navigate("Registration")}
            title="Sign Up"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default Loginpage;
