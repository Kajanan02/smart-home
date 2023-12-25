/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigation from "./src/navigation/tabs-navigation";


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
}

export default App;
