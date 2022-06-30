import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import TabNavigator from "./ui/navigation/TabNavigator";
import tw from "./ui/tailwind/tailwind";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
