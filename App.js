import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AmountDue from "./components/AmountDue";

export default function App() {
  return (
    <SafeAreaView >
      <Text>this my first app</Text>
      <AmountDue/>
    </SafeAreaView>
  );
}
