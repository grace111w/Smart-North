import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function coursepage() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepage")}
            title="Minneapolis"
            style={styles.blueButton}
          />
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
  },
  orangeButton: {
    margin: 10,
    borderWidth: 2,
    tintColor: "#F38120",
    padding: 10,
    textDecorationColor: "#FFFFFF",
  },
  coursebuttonrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
