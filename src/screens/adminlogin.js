import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
    ScrollView,
    Image,
  } from "react-native";
  import React from "react";
  import Input from "../component/Input";
  import { auth } from "../../FireBaseconfig";
  import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
  import smart from "../img/IMG_1272.jpg";
  import { useFonts } from "expo-font";
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
  
   
  
    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          props.navigation.navigate("coursepage");
        }
      });
      return unsubscribe;
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image style={styles.pic} source={smart}></Image>
          <Input
            label="Email address"
            iconName="envelope-square"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <View />
          <Input
            label="Password"
            iconName="key"
            placeholder="Password"
            password
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.scrollContainer}>
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.textButton}>Login</Text>
            </Pressable>
          </View>
         
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#C3DBFA",
      alignItems: "center",
      justifyContent: "center",
    },
    pic: {
      flex: 1,
      width: 375,
      resizeMode: "contain",
      marginTop: -500,
      marginBottom: -500,
    },
    scrollContainer: {
      padding: 20,
      paddingHorizontal: 20,
    },
    textFitle: {
      fontSize: 30,
      fontFamily: "Barlow",
      fontWeight: "bold",
      color: "#475467",
    },
    button: {
      borderWidth: 0.5,
      borderRadius: 100,
      alignItems: "center",
      paddingVertical: 22,
      paddingHorizontal: 5,
      justifyContent: "center",
      borderRadius: 100,
      backgroundColor: "#68a4ff",
    },
    textButton: {
      textAlign: "center",
      fontSize: 16,
      color: "#475467",
      fontWeight: "bold",
    },
    text: {
      textAlign: "center",
      fontSize: 16,
      color: "#475467",
      fontWeight: "bold",
    },
  });
  export default Loginpage;