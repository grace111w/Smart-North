import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  StyleSheet,
  Pressable,
  Text,
  Image,
  View,
  Button,
  FlatList,
} from "react-native";
import cyber from "../img/metaverse-1024x614.jpg";
import cybers from "../img/cybersecurity.png";
import cyberss from "../img/OIP.jpg";
import cybersss from "../img/poo.jpg";
import { db } from "../../FireBaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function (props) {
  const responseArr: any[] = [];

  const [courseData, setcourseData] = React.useState([]);

  const q = query(collection(db, "Users"), where("userName", "==", true));

  React.useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc);

        responseArr.push(doc.data());
        setcourseData(responseArr);
        console.log(courseData);
      });
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.coursestext}>Users</Text>
      <FlatList
        data={courseData}
        renderItem={({ item }) => (
          <View style={styles.course}>
            <Text style={styles.coursetext}>{item.userName}</Text>
            <Pressable
              style={styles.blueButton}
              onPress={() => props.navigation.navigate("cybersecurity101")}
            ></Pressable>
          </View>
        )}
      />
    </SafeAreaView>
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
    padding: 10,
    textDecorationColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 50,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 2,
    elevation: 3,
    backgroundColor: "#475467",
  },
  orangeButton: {
    borderWidth: 1,
    borderColor: "#475467",
    justifyContent: "center",
    marginTop: -40,
    marginBottom: -50,
    alignItems: "center",
    backgroundColor: "#F5A449",
  },
  space: {
    padding: 50,
  },
  coursestext: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#475467",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    width: 50,
    flex: 1,
  },
  course: {
    borderColor: "#A4C8FF",
    borderWidth: 10,
    borderRadius: 10,
    backgroundColor: "#A4C8FF",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    width: "50%",
    flex: 1,
  },
  courselabel: {
    fontSize: 25,
    color: "#475467",
  },
  coursetext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#475467",
    marginBottom: 20,
  },
  learnmore: {
    borderWidth: 1,
    borderColor: "#475467",
    flex: 1,
    justifyContent: "center",
    height: 35,
    width: 100,
    marginLeft: 150,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: "#68a4ff",
    alignItems: "center",
  },
  whitetext2: {
    fontSize: 15,
    color: "white",
  },
  whitetext: {
    fontSize: 25,
    color: "white",
  },
});
