import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Analytics")}>
        <Text style={{ color: "#000" }}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
