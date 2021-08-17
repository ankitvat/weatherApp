import React , {useState , useEffect ,} from 'react';
import {View, Image,Dimensions, StyleSheet, Text, Animated, Easing ,SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './Main';
import {create } from 'apisauce';
import { weatherApiKey } from '../utils/config';
import axios from 'axios';





const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Splash({navigation}) {
  
    const [apiData ,setApiData] = useState({});
    const [screen, setScreen] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [direction, setDirection] = useState({});

   
    const api = create({
        baseURL:`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`,
    
    })
    findLocation = () =>{
        navigator.geolocation.getCurrentPosition(
            position =>{
                const longi = JSON.stringify(position.coords.longitude);
                const lati = JSON.stringify(position.coords.latitude);
                setDirection({
                    longi,
                    lati,
                })
            },
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
  
           
        );
        
     };
    useEffect(async () =>{
        const response  = await api.get()
        Object.keys(response.data).forEach(key => {
           console.log(response.data[key]);
        })
        
        
    } , [api ,setApiData]);

     
    
    
    

      useEffect(() => {

        setTimeout(() => {
           
            navigation.replace('Main');
        }, 2000);
         
      }, [api ,apiData]);

    const background = {
        backgroundColor:Colors.black,
        height : h,
        width : w,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

    };
    return(
        <SafeAreaView style={background}>
            <LottieView  source = {require('../utils/splash.json')} autoPlay loop/>
            <Text style = {{
                fontFamily:'CircularStd-Book',
                color:'#d71535',
                fontWeight:"800",
                fontSize:52,

            }}>Climic</Text>
            </SafeAreaView>
    )
}
