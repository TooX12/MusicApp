import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import tw from "../tailwind/tailwind";

function HomeScreen() {
  return (
    <View style={tw`flex flex-1 items-center justify-center bg-bgColor px-2`}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
