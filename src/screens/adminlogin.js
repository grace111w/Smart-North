import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
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
          onPress={() => props.navigation.navigate("generalinfo")}
        ></Pressable>
        <Pressable
          style={styles.orangeButton}
          onPress={() => props.navigation.navigate("userinfo")}
        ></Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5a449",
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
    margin: 10,
    borderWidth: 2,
    padding: 10,
    textDecorationColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 2,
    elevation: 3,
    backgroundColor: "#475467",
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
