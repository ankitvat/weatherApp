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
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {scale} from '../utils/fonts';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Main({navigation: {navigate}}) {
   

  const data = useSelector(state => state.weather);
  let items = [];
   for (let i = 1; i < data.description.length; i++) {
    items.push(<p>{data.description[i]} {data.temp[i]} {data.day[i]}</p>)
   }
   console.log("helo", items[0].props.children[4]);
  
  return (
    <SafeAreaView style={styles.parentLayout}>
      <View style={styles.mainCard}>
        <Text
          style={{
            fontFamily: 'CircularStd-Book',
            color: 'white',
            fontSize: scale(24),
            position: 'absolute',
            top: w / 15,
            left: w / 15,
          }}>
          {data.city}
        </Text>
        <Text
          style={{
            fontFamily: 'CircularStd-Book',
            color: 'white',
            fontSize: scale(44),
            position: 'absolute',
            left: w / 15,
          }}>
          {data.temp[0]}
        </Text>
        <Text
          style={{fontSize: scale(12),fontFamily:'CircularStd-Book', position: 'absolute', color: 'white' ,left:w/3.2 ,marginTop:'5%'}}>
          °C
        </Text>
        <Text
          style={{
            fontFamily: 'CircularStd-Book',
            color: 'white',
            fontSize: scale(14),
            position: 'absolute',
            bottom: w / 15,
            left: w / 15,
          }}>
          {data.description[0]}
        </Text>
       
           
        
        
      </View>
      <ScrollView  style ={{marginTop:'8%',width:w/1.2, height:'100%'}}showsVerticalScrollIndicator ={false}>
            {items.map((item, index) => (
                <View key ={index} style = {styles.sideCard}>
                    <Text style = {{position:'absolute', top:w/25, left:w/15 ,color:'white', fontFamily:'CircularStd-Book', fontSize:scale(24)}}>{items[index].props.children[4]}</Text>
                    <Text style = {{position:'absolute', bottom:w/25, left:w/15 ,color:'white', fontFamily:'CircularStd-Book', fontSize:scale(14)}}>{items[index].props.children[0]}</Text>
                    <Text style ={{position:'absolute' , fontSize:scale(28) ,fontFamily:'CircularStd-Book', color:'white' , right:w/10}}>{items[index].props.children[2]}</Text>
                    <Text
          style={{fontSize: scale(12),fontFamily:'CircularStd-Book', position: 'absolute', color: 'white' ,right:w/15,top:w/20 ,marginTop:'5%'}}>
          °C
        </Text>
                </View>
            ))}
          </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentLayout: {
    width: w,
    height: h,
    padding: '3%',
    paddingVertical: '10%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.black,
    fontSize: 26,
    fontFamily: 'CircularStd-Book',
  },
  mainCard: {
    paddingHorizontal: '5%',
    justifyContent: 'center',
    width: w / 1.2,
    height: w / 1.8,
    borderRadius: scale(20),
    backgroundColor: Colors.darker,
    
  },
  sideCard: {
      width: w/1.2,
      height: w/4.5,
      marginVertical:'3%',
      borderRadius: scale(20),
      backgroundColor: Colors.darker,
      paddingHorizontal: '5%',
      justifyContent: 'center',
      flexDirection:'column',
  },
});
