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
  PermissionsAndroid,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './Main';
import {create} from 'apisauce';
import {weatherApiKey} from '../utils/config';
import axios from 'axios';
import GetLocation from 'react-native-get-location';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Splash({navigation}) {
  const [apiData, setApiData] = useState({});
  const [screen, setScreen] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [gps, setGps] = useState(null);

  findLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setGps({lat: location?.latitude, long: location?.longitude});
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(async () => {
    findLocation();
  }, []);

  useEffect(async () => {
    if (gps && gps.lat && gps.long) {
      console.log(gps);
      const api = create({
        baseURL: `http://api.openweathermap.org/data/2.5/forecast?lat=${gps.lat}&lon=${gps.long}&units=metric&appid=${weatherApiKey}`,
      });
      const currentTime = new Date().toLocaleTimeString();
      console.log(currentTime);
      const response = await api.get();
        Object.keys(response.data).forEach(key => {
            console.log(response.data[key]);
        });
      let data = {};
      let temps = [];
      let desc = [];
      let days = [];
      const getDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
      let currentDate = new Date().getDay();
      
      let city = response.data.['city'].name;
      console.log(city)
      //   let date  = response.data['list'][0].dt_txt.split(' ')[0];
      let time = response.data['list'][0].dt_txt.split(' ')[1];
      Object.keys(response.data['list']).forEach(key => {
        if (response.data['list'][key].dt_txt.split(' ')[1] == time) {
          temps.push(response.data['list'][key].main.temp);
          desc.push(response.data['list'][key].weather[0].description);
          days.push(getDays[currentDate]);
          currentDate++;
          currentDate = currentDate % 6;
          
          
        }
      });

      //   temps.push(response.data['list'][0].main.temp);
      console.log(temps);
      console.log(desc);
      console.log(days);
      if (response) navigation.replace('Main');
    }
  }, [gps]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.replace('Main');
  //     }, 2000);
  //   }, []);

  const background = {
    backgroundColor: Colors.black,
    height: h,
    width: w,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <SafeAreaView style={background}>
      <LottieView source={require('../utils/splash.json')} autoPlay loop />
      <Text
        style={{
          fontFamily: 'CircularStd-Book',
          color: '#d71535',
          fontWeight: '800',
          fontSize: 52,
        }}>
        Climic
      </Text>
    </SafeAreaView>
  );
}
