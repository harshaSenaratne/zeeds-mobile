import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpdateNumber from "../screens/UpdateNumber";
import ViewNumber from "../screens/ViewNumber";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0e1529" },
        }}
        sceneContainerStyle={{ backgroundColor: "#0e1529" }}
      >
        <Tab.Screen
          name="One"
          component={ViewNumber}
          options={{
            tabBarShowLabel: true,
          }}
        />
        <Tab.Screen
          name="Two"
          component={UpdateNumber}
          options={{
            tabBarShowLabel: true,
          }}
        />
        <Tab.Screen
          name="Three"
          component={ViewNumber}
          options={{
            tabBarShowLabel: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
