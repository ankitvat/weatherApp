import React , {useState , useEffect} from 'react';
import {View, Image,Dimensions, StyleSheet, Text, Animated, Easing ,SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './Main';
import {create } from 'apisauce';
import { weatherApiKey } from '../utils/config';





const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Splash({navigation}) {
  
    const [apiData ,setApiData] = useState({});
    const [screen, setScreen] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
   
    const api = create({
        baseURL:`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`,
    
    })
    useEffect(() =>{
        
        api
        .get()
        .then(response =>response.data)
        .then(data =>{
            setApiData(data);
        }
        )
        console.log(JSON.stringify(apiData,null,2));
        
    } , [api]);
    
    
    

      useEffect(() => {
        setTimeout(() => {
           
            navigation.replace('Main');
        }, 2000);
         
      }, [apiData]);

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
