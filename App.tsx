import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "./ui/tailwind/tailwind";

export default function App() {
  return (
    <View style={tw`flex flex-1 items-center justify-center bg-red-100 px-2`}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
