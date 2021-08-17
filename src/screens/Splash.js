import React , {useState , useEffect} from 'react';
import {View, Image,Dimensions, StyleSheet, Text, Animated, Easing ,SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './Main';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Splash({navigation}) {
    const [screen, setScreen] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    

      useEffect(() => {
        setTimeout(() => {
           
            navigation.replace('Main');
        }, 2000);
         
      }, []);

    const background = {
        backgroundColor:Colors.darker,
        height : h,
        width : w,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

    };
    return(
        <SafeAreaView style={background}>
            <LottieView  source = {require('../utils/splash.json')} autoPlay loop/>
            </SafeAreaView>
    )
}
