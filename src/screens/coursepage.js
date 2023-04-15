import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Pressable, Text, Image, View, Button } from "react-native";
import cyber from "../img/cybersecurity.png";

export default function (props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.coursestext}>Minneapolis Courses</Text>
        <View>
        <Pressable style={styles.orangeButton}
         onPress={() => props.navigation.navigate("coursepagedeerriver")} >
          <Text style={styles.whitetext}>Deer River</Text>
        </Pressable>
        </View>

       <View style={styles.course}>
        <View style={styles.row}>
        <Image source={cyber}></Image>
        </View>

         <View style={styles.row}>
          <Text style={styles.courselabel}>Cyber Security 101</Text>
          <Button
            onPress={() => props.navigation.navigate("cybersecurity101")}
            title="Learn More"
            style={styles.learnmore}
          />
        </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3DBFA",
    alignItems: "center",
    justifyContent: "center"
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
    textDecorationColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: "50",
    alignItems: 'center',
    backgroundColor: '#F5A449'
  },
  coursestext: {
    fontWeight: "bold",
    flex: 1,
    textDecorationColor: "#475467",
    fontSize: 30,
    justifyContent: "center"
  },
  row: {
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
    textDecorationColor: "#475467",
  },
  coursetext: {
    fontSize: 15,
    textDecorationColor: "#68A4FF",
  },
  learnmore: {
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
  whitetext: {
    fontSize: 25,
    color: "white",
  }
});
