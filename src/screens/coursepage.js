import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";


export default function (props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text style={styles.coursestext}>Minneapolis Courses</Text>
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepagedeerriver")}
            title="Deer River"
            style={styles.orangeButton}
          />
        </View>
        <View>
          style={styles.course}
          flexDirection: 'row'
          flex: 1
          <View>
            style={styles.row}
          </View>
          <View>
            style={styles.row}
            <Text style={styles.courselabel}>Cyber Security 101</Text>
            <Text style={styles.coursetext}>Cybersecurity is essential for protecting internet-connected systems and sensitive information from unauthorized access, damage or attack due to the increasing frequency of cyber attacks.</Text>
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
    justifyContent: "center",
  },
  blueButton: {
    margin: 10,
    borderWidth: 2,
    tintColor: "#475467",
    padding: 10,
    textDecorationColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10",
  },
  orangeButton: {
    margin: 10,
    borderWidth: 2,
    tintColor: "#F38120",
    padding: 10,
    textDecorationColor: "#FFFFFF",
    alignItems: "center",
    width: "85%",
    height: "15%",
  },
  coursestext: {
    fontWeight: "bold",
    textDecorationColor: "#475467",
    height: "15%",
    width: "100%",
    fontSize: 30
  },
  row: {
    width: "50%",
    flex: 1
  },
  course: {
    borderColor: "#A4C8FF",
    borderWidth: "10",
    borderRadius: "10",
    backgroundColor: "#A4C8FF"
  },
  courselabel: {
    fontSize: 25,
    textDecorationColor: '#475467'
  },
  coursetext: {
    fontSize: 15,
    textDecorationColor: '#68A4FF'
  },
  learnmore: {
    margin: 10,
    borderWidth: 2,
    tintColor: "#475467",
    padding: 10,
    textDecorationColor: "#A4C8FF",
    alignItems: "center",
  }
});
