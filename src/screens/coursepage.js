import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Pressable, Text, Image, View, Button } from "react-native";
import cyber from "../img/metaverse-1024x614.jpg";

export default function (props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
            <Text style={styles.coursestext}>Minneapolis Courses</Text>
        <View style={styles.space}>
       <Pressable style={styles.orangeButton}
         onPress={() => props.navigation.navigate("coursepagedeerriver")} >
          <Text style={styles.whitetext}>Deer River</Text>
        </Pressable>
        </View>

       <View style={styles.course}>
        <View>
        <Image style={styles.pic} source={cyber}></Image>
        </View>

         <View>
          <Text style={styles.coursetext}>Foundations of Metaverse Building</Text>
          <Pressable  style={styles.learnmore}
            onPress={() => props.navigation.navigate("cybersecurity101")}
            title="Learn More"
           
          />
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3DBFA",
    alignItems: 'center',
    justifyContent: 'center'
  },  
  pic: {
    flex: 1,
    width: 100,
    Height: null, 
    resizeMode: 'contain',
    marginTop: -400,
   marginBottom: -500,
   },
  blueButton: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    textDecorationColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "50",
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 2,
    elevation: 3,
    backgroundColor: '#475467'
  },
  orangeButton: {
    borderWidth: 2,
    justifyContent: "center",
    borderRadius: "50",
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
    flex: 1
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
    flex: 1
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
    Color: "#68A4FF",
  },
  learnmore: {
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    height: 5,
    
    borderRadius: "50",
    backgroundColor: '#475467',
    alignItems: 'center',
   
  },
  whitetext: {
    fontSize: 25,
    color: "white",
  }
});
