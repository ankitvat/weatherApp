import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scale} from '../utils/fonts';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Error({navigation:{navigate}}){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.errors}>
                Something went wrong at our End.
            </Text>
            <TouchableOpacity style = {styles.button} onPress={() => navigate('Splash')}>
               <Text style={{color:'#fff', fontFamily:'CircularStd-Book', fontSize:scale(18),}}>Retry</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:w,height:h,
        padding:'3%',
        flexDirection:'column',
        paddingVertical:'5%',
        backgroundColor:Colors.black,
        fontSize:26,
        justifyContent:'center',
        alignItems:'center',
    },
    errors:{
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'CircularStd-Book',
        color:Colors.white,
        fontSize:scale(40),
    },
    button:{
        backgroundColor:'#d71535',
        alignItems:'center',
        justifyContent:'center',
        fontSize:scale(20),
        borderRadius:scale(35),
        width:w/2.8,
        height:h/18,
        marginVertical:'40%',
    },

});