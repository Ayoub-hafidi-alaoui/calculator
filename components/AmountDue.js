import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class AmountDue extends Component {
    render() {
        return (
            <View style={styles.amountOutput}>
                <View style={styles.amountOutputElement}>
                    <Text style={textStyles.accentedText}>Per Person</Text>
                    <View style={styles.totalDue}>
                        <Text style={[textStyles.textWhite,textStyles.dollarSign]}>$</Text>
                        <Text style={[textStyles.textWhite,textStyles.dollars]}>43</Text>
                        <Text style={[textStyles.textWhite,textStyles.cents]}>.69</Text>
                    </View>
                    <Text style={textStyles.textWhite}>Total</Text>
                </View>
                <View style={styles.verticaleLine}/>
                <View style={styles.amountOutputElement}>
                    <Text style={[textStyles.textWhite,textStyles.subtitle]}>Subtotal</Text>
                    <Text style={textStyles.textWhite}>$37,99</Text>
                    <Text style={[textStyles.textWhite,textStyles.subtitle]}>Tip</Text>
                    <Text style={textStyles.textWhite}>5.70</Text>
                </View>
            </View>
        )
    }
}

export default AmountDue

const styles=StyleSheet.create({
    amountOutput:{
        backgroundColor:'#444',
        padding:20,
        width: '90%',
        marginVertical:10,
        borderRadius:10,
        flexDirection: 'row',
    },
    amountOutputElement:{
        width: '50%',
    },
    verticaleLine:{
        height: '100%',
        width: 1,
        backgroundColor:'#909090',
        opacity: 0.5,
        marginHorizontal:10,
    },
    totalDue:{
        flexDirection: 'row',
    },  
   
})
const textStyles=StyleSheet.create({
    textWhite:{
        color:'#f4f3f3',
        fontWeight:'800',
        fontSize:20,
    },
    dollarSign:{
        marginTop:8,
    },
    dollars:{
        fontSize:70,
        fontWeight:'800',
    },
    cents:{
        fontSize:20,
        alignSelf:'flex-end',
        marginBottom:15,
        marginLeft:5
    },
    accentedText:{
        color: '#ff007f',
        fontWeight:'900',
        fontSize:20,
        marginBottom:4
        
    },
    subtitle:{
        fontSize:14,
        marginTop:16,

    }
})
