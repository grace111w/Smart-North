import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { db } from "../../FireBaseconfig";
import { doc, getDoc } from "firebase/firestore";

const MyComponent = () => {
  const docRef = doc(db, "Users", "0wQLP8Jdmqjo7qCzfxsv");
  //const [userData, setUserData] = useStaate(null);

  useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Hellow</Text>
    </View>
  );
};

export default MyComponent;
