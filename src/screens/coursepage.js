import React from "react";
import { StyleSheet, Text, View } from "react-native";

const coursepage = (props) => {
  return (
    <SafeAreaView>
      <View style={style.appPage}>
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepage")}
            title="Minneapolis"
          />
        </View>
        <View>
          <Button
            onPress={() => props.navigation.navigate("coursepagedeerriver")}
            title="Deer River"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
}
]