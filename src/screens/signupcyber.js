import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Pressable, Text, Image, View } from "react-native";

export default function (props) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.con}>
            <Text style={styles.subheading}>Signing up for: Foundations of Metaverse Building</Text>
          </View>
          
          <Input
          label="Email Address:"
          iconName="envelope-square"
          placeholder="Email"
          onChangeText={(text) => handleOnChange(text, "email")}
        />

        <Pressable
        style={styles.orangeButton}
        onPress={() => Text("Confirm")}>
          <Text style={styles.whitetext}>Sign Up</Text>
        </Pressable>

        <Pressable
        style={styles.blueButton}
        onPress={() => props.navigation.navigate("cybersecurity101")}>
          <Text style={styles.whitetext}>Back</Text>
        </Pressable>

        </ScrollView>
    </SafeAreaView>
    );
}


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#C3DBFA",
        },
        pic: {
          flex: 1,
          width: 250,
          height: 100,
          resizeMode: "contain",
          marginHorizontal: 30,
          marginBottom: 10,
        },
        blueButton: {
          borderWidth: 2,
          justifyContent: "center",
          marginTop: -10,
          marginBottom: -50,
          alignItems: "center",
          backgroundColor: "#475467",
          borderColor: "#475467",
          borderRadius: 10
        },
        orangeButton: {
          borderWidth: 2,
          justifyContent: "center",
          marginTop: -10,
          marginBottom: -50,
          alignItems: "center",
          backgroundColor: "#F5A449",
          borderColor: "#F5A449",
          borderRadius: 10
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
        subheading: {
          fontWeight: "bold",
          fontSize: 20,
          color: "#475467",
          justifyContent: "center",
          flex: 1,
          marginTop: 10,
          marginBottom: 10,
        },
        con: {
          alignItems: "center",
          justifyContent: "center",
        },
        row: {
          width: 50,
          flex: 1,
        },
        course: {
          borderColor: "#A4C8FF",
          borderWidth: "10",
          borderRadius: "10",
          backgroundColor: "#A4C8FF",
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
          fountweight: "bold",
          Color: "#475467",
          marginVertical: 10,
        },
        learnmore: {
          borderWidth: 2,
          flex: 1,
          justifyContent: "center",
          height: 35,
          width: 100,
          marginLeft: 150,
          marginBottom: 10,
          borderRadius: "50",
          backgroundColor: "#68a4ff",
          alignItems: "center",
        },
        whitetext2: {
          fontSize: 15,
          color: "white",
        },
        whitetext: {
          fontSize: 25,
          color: "white",
          marginHorizontal: 5
        },
        bluetext: {
          fontSize: 15,
          color: "#68A4FF",
          marginVertical: 10,
        },
        bluetextbold: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#68A4FF",
          marginVertical: 10,
        },
        leftscreen: {
          alignItems: "flex-start",
          justifyContent: "center",
          marginHorizontal: 15,
        },
        modal: {
          backgroundColor: "#68A4FF",
        }
      });
      