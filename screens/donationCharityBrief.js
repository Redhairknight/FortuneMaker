import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function donationCharityBrief({navigation}){
  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:"column"}}>
     <View style={{flex:1}}>
        <View style={{ width: 380,  height: 150,backgroundColor: '#1F4E79'}}></View>
      <Text style={{color:'white', fontSize:50,textAlign:"center",top:'-35%'}}>Charity detail</Text>
      </View>
      </View>
      
      <View style={{flex:1, flexDirection:"row"}}>
        <View style={{flex:1}}>
       <Image style={{right:'-5%',top:'-5%'}} source={require('../assets/check1.png')} />
       <Text style={{textAlign:"center",top:'5%'}} >Australian Koala Foundation </Text>
       </View>
       <View style={{flex:1}}>
       <Image style={{left:'5%',top:'-5%'}} source={require('../assets/check2.png')} />
       <Text style={{textAlign:"center",top:'5%'}}>Guide Dog</Text>
       </View>
       </View>

       <View style={{flex:1, flexDirection:"row"}}>
       <View style={{flex:1}}>
       <Image style={{right:'-5%'}} source={require('../assets/check3.png')} />
       <Text onPress={()=>navigation.navigate('DonationCharityCanTeen')} style={{textAlign:"center",top:'5%'}}>CanTeen</Text>
       </View>
       <View style={{flex:1}}>
       <Image style={{left:'5%'}} source={require('../assets/check4.png')} />
       <Text style={{textAlign:"center",top:'5%'}}> Royal flying doctor service </Text>
       </View>
       </View>
       
       <View style={{width: 380, height: 200, backgroundColor: '#1F4E79'}} >
       <Text style={{color:'white',textAlign:"center"}} >Note: Fortune maker provides fund-raising services on the Internet platform, and every donation made by users goes directly to the account of the charity.</Text>
       </View>

       
      
      <StatusBar style="auto" />
    </View>  
  );
  } 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
 
   
  },
 

  
});

export default donationCharityBrief
