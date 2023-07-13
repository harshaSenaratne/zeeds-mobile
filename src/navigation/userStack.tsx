import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpdateNumber from "../screens/UpdateNumber";
import ViewNumber from "../screens/ViewNumber";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Two"
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
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-1-circle"
                color={"#fff"}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Two"
          component={UpdateNumber}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-2-circle"
                color={"#fff"}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Three"
          component={ViewNumber}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-3-circle"
                color={"#fff"}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
