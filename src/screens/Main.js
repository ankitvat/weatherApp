import React , {useState , useEffect} from 'react';
import {View, Image,Dimensions, StyleSheet, Text, Animated, Easing ,SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Main({navigation:{navigate}}){
    const data = useSelector(state => state.weather);
    console.log("saara aaega" , data);
    return(
        <SafeAreaView style={styles.parentLayout}>
            <Text style = {{
                color:"#FFF",
            }}>Main Screnn</Text>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    parentLayout:{
        width:w,
        height:h,
        padding:'3%',
        backgroundColor:Colors.black,
        fontSize:26,
        fontFamily:'CircularStd-Book',
    },
});