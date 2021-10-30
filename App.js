import * as React from "react";
import { View,Pressable,SafeAreaView, Text, StyleSheet } from "react-native";
import AmountDue from "./components/AmountDue";
import {useState} from 'react'
export default function App() {
  const [tipPercent, setTipPercent] = useState(15)
  return (
    <SafeAreaView style={styles.container} >
      <AmountDue title={"per person"} subTotal={75.98 /2} tipPercent={tipPercent}/>
      <AmountDue title={"Amount Due"} subTotal={75.98 /2} tipPercent={tipPercent}/>
      <View style={styles.tipSelector} >
        <Pressable style={styles.tipItem(tipPercent,10)} onPress={()=>setTipPercent(10)}>
          <Text style={styles.textWhite}>10%</Text>
        </Pressable>
        <Pressable style={styles.tipItem(tipPercent,15)} onPress={()=>setTipPercent(15)}>
          <Text style={styles.textWhite}>15%</Text>
        </Pressable>
        <Pressable style={styles.tipItem(tipPercent,20)} onPress={()=>setTipPercent(20)}>
          <Text style={styles.textWhite}>20%</Text>
        </Pressable>
        <Pressable style={styles.tipItem(tipPercent,25)} onPress={()=>setTipPercent(25)}>
          <Text style={styles.textWhite}>25%</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#1e1d1d',
    alignItems:'center',
    paddingHorizontal:20,
  },
  tipSelector:{
    flexDirection:'row',
    marginTop:20,
  },
  textWhite:{
    color: '#f4f3f3',
    fontWeight:'800',
    fontSize:20
  },
  tipItem:(tipPercent,selectedTipPercent)=>({
    backgroundColor:(tipPercent===selectedTipPercent) ? '#ff007f':'#909090',
    margin:5,
    padding:10,
    borderRadius:50,
  }),
})
