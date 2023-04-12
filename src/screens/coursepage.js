import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";

/*  React.useEffect(() => {
    const unsubscribe =  props.navigation.navigate("coursepagedeerriver");
    });
  }, []); */

export default function (props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.coursestext}>Minneapolis Courses</Text>
          <Button
            onPress={() => props.navigation.navigate("coursepagedeerriver")}
            title="Deer River"
            style={styles.orangeButton}
          />
        </View>
        <View>style= {}</View>
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
    fontSize: "30",
    fontWeight: "bold",
    textDecorationColor: "#475467",
    height: "15%",
    width: "100%",
  },
  course: {},
});
