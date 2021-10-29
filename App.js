import * as React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import AmountDue from "./components/AmountDue";

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <AmountDue/>
      <AmountDue/>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#1e1d1d',
    alignItems:'center',
    paddingHorizontal:20,

  }
})
