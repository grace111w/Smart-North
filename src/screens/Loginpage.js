import { View, Text, SafeAreaView, StyleSheet, Pressable, ScrollView, Image } from "react-native";
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
        <Image source={smart}></Image>
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
          <Pressable style={styles.button} onPress={handleLogin} >
            <Text style={styles.textButton}>Login</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate("Registration")} >
            <Text style={styles.textButton}>Sign Up</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate("coursepage")} >
            <Text style={styles.textButton}>coursepage</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "c3dbfa",
    flex: 1,
  },
  scrollContainer: {
    padding: 45,
    paddingHorizontal: 20,
  },
  textFitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "475467",
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
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  }
});

export default Loginpage;
