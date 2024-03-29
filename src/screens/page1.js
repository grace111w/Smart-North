import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  style,
  Button,
  SafeAreaView,
  Pressable,
  
} from "react-native";

export default function (props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space}>
        <Pressable
          style={styles.orangeButton}
          onPress={() => props.navigation.navigate("Login")}
          >
          <Text style={styles.textButton}>User Login</Text>
        </Pressable>
       
        <Pressable
          style={styles.orangeButton}
          onPress={() => props.navigation.navigate("adminlogin")}
        >
            <Text  style={styles.textButton}>Admin Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3DBFA",
    alignItems: "center",
    justifyContent: "center",
  },
  pic: {
    flex: 1,
    width: 100,
    height: null,
    resizeMode: "contain",
    marginTop: -390,
    marginBottom: -500,
  },
  blueButton: {
     borderWidth: 0.5,
     borderRadius: 100,
     alignItems: "center",
     paddingVertical: 22,
     paddingHorizontal: 5,
     justifyContent: "center",
     borderRadius: 100,
     backgroundColor: "#68a4ff",
  },
  orangeButton: {
    borderWidth: 1,
    borderColor: "#475467",
    justifyContent: "center",
    marginTop: -40,
    marginBottom: -50,
    alignItems: "center",
    backgroundColor: "#68a4ff",
  },
  space: {
    padding: 50,
  },
  coursestext: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#475467",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    width: 50,
    flex: 1,
  },
  course: {
    borderColor: "#f38120",
    borderWidth: 10,
    borderRadius: 10,
    backgroundColor: "#f38120",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    width: "50%",
    flex: 1,
  },
  courselabel: {
    fontSize: 25,
    Color: "#475467",
  },
  coursetext: {
    fontSize: 15,
    fontweight: "bold",
    Color: "#475467",
    marginBottom: 20,
  },
  learnmore: {
    borderWidth: 1,
    borderColor: "#475467",
    flex: 1,
    justifyContent: "center",
    height: 35,
    width: 100,
    marginLeft: 150,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: "#f38120",
    alignItems: "center",
  },
  whitetext2: {
    fontSize: 15,
    color: "white",
  },
  whitetext: {
    fontSize: 25,
    color: "white",
  },
});
