import React from "react";
import Home from "../screens/Home/home";
import Analytics from "../screens/Analytics";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabsNavigation(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
