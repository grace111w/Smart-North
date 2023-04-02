import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, View, Button, Text, TextStyle } from "react-native";

// export default function App(){
//   return (
//     <View style={styles.container}>
//       <Text>Courses</Text>
//     </View>
//   );
// }

export default function coursepage() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={flexDirection= 'row'}></View>
          <Button
            onPress={() => props.navigation.navigate("coursepage")}
            title="Minneapoliss"
            style={styles.blueButton}
          />
          <Button
            onPress={() => props.navigation.navigate("coursepagedeerriver")}
            title="Deer River"
            style={styles.orangeButton}
          />
        </View>
        <View>
          <View style={borderWidth= '10'}></View>
          <View style={flexDirection= 'row'}></View>
          <Image
              source={{uri: 'app_icon'}}
              style={{width: 40, height: 40}}
          />
          < Text
              style={textDecorationColor= '#FFFF' }
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
