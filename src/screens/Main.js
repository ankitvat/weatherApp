import React , {useState , useEffect} from 'react';
import {View, Image,Dimensions, StyleSheet, Text, Animated, Easing ,SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Main({navigation:{navigate}}){
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
        backgroundColor:Colors.darker,
    },
});