import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, View, Button, Text } from "react-native";

export default function (props) {
    return (
      <View style={styles.container}>
        <SafeAreaView>
        <Text style={styles.coursestext}>Deer River Courses</Text>
          <View>
            <Button
              onPress={() => props.navigation.navigate("coursepage")}
              title="Minneapolis"
              style={styles.orangeButton}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
  