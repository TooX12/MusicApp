import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import MusicScreen from "../screens/MusicScreen";
import ProfileScreen from "../screens/ProfileScreen";
import tw from "../tailwind/tailwind";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5fe85d",
        tabBarStyle: {
          backgroundColor: "#1f222b",
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: "#070b10",
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 24,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerTitle: "Descubre",
        }}
      />
      <Tab.Screen
        name="Mi Música"
        component={MusicScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="musical-notes" size={size} color={color} />
          ),
          headerTitle: "Mi Música",
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="person" size={size} color={color} />
          ),
          headerTitle: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
