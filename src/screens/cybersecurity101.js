import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Pressable, Text, Image, View, Pressable } from "react-native";
import cyber from "../img/metaverse-1024x614.jpg";

export default function (props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.con}>
            <Text style={styles.coursestext}>Foundations of Metaverse Building</Text>
            <Image style={styles.pic} source={cyber}></Image>
        </View>
        <View style={styles.con}>
          <Text style={styles.subheading}>Description</Text>
        </View>
        <View style={styles.leftscreen}>
           <Text style={styles.bluetext}>Engage within the world of virtual reality and gain access to this growing multi-billion dollar industry.
           With the rapid growth of platforms like Roblox, Minecraft, and Pokemon GO, the metaverse is well on its way to changing the way we socialize, 
           as well as work, learn, and play. Rapidly growing into a trillion-dollar ecosystem, the metaverse is home to an entirely new generation of career opportunities. 
           4 in-person sessions and 3 self-study assignments, culminating in a capstone project - perfect to build a portfolio and resume.</Text>
        </View>
        <View style={styles.con}>
           <Text style={styles.bluetextbold}>*15 spots available, 5 waitlist spots*</Text>
           <Text style={styles.subheading}>Information</Text>
        </View>
        <Pressable style={styles.blueButton}
         onPress={() => props.navigation.navigate("coursepage")} >
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
    Height: 100, 
    resizeMode: 'contain',
    marginHorizontal: 30,
    marginTop: -200,
    marginBottom: -100,
   },
  blueButton: {
      borderWidth: 2,
      justifyContent: "center",
      marginTop: -40,
      marginBottom: -50,
      alignItems: 'center',
      backgroundColor: '#475467',
  },
  orangeButton: {
    borderWidth: 2,
    justifyContent: "center",
    marginTop: -40,
    marginBottom: -50,
    alignItems: 'center',
    backgroundColor: '#F5A449'
  },
  space: {
    padding: 50,
  },
  coursestext: {
    fontWeight: "bold",
    fontSize: 30,
    color: '#475467',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#475467',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  con: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    width: 50,
    flex: 1
  },
  course: {
    borderColor: "#A4C8FF",
    borderWidth: "10",
    borderRadius: "10",
    backgroundColor: "#A4C8FF",
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  row: {
    width: "50%",
    flex: 1
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
    backgroundColor: '#68a4ff',
    alignItems: 'center',
   
  },
  whitetext2: {
    fontSize: 15,
    color: "white",
  },
  whitetext: {
    fontSize: 25,
    color: "white",
  },
  bluetext: {
    fontSize: 15,
    color: '#68A4FF',
    marginVertical: 10,
  },
  bluetextbold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#68A4FF',
    marginVertical: 10
  },
  leftscreen: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 15,
  }
});
