
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> sign in  </Text>
      <StatusBar style= "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3dbfa",
    alignItems: "baseline",
    justifyContent: "center",
  },
});
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
/>