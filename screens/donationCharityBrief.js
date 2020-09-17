import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function donationCharityBrief({navigation}){
  return (
    <View style={styles.container}>

    <View
        style={{
          backgroundColor: "#1F4E79",
          width: "100%",
          height:"15%"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            color:"white",
            marginTop:"7%"
          }}
        >
          Charity Info
        </Text>
      </View>


      {/**主要内容 */}
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
       <Image style={{right:'-5%',}} source={require('../assets/check1.png')} />
       <Text style={{textAlign:"center",top:'5%'}} >Australian Koala Foundation </Text>
       </View>
       <View style={{flex:1}}>
       <Image style={{left:'5%',}} source={require('../assets/check2.png')} />
       <Text style={{textAlign:"center",top:'5%'}}>Guide Dog</Text>
       </View>
       </View>

      <View style={{flexDirection:"row"}}>
      
       <View style={{flex:1}}>
       <Image style={{right:'-5%'}} source={require('../assets/check3.png')} />
       <Text onPress={()=>navigation.navigate('DonationCharityCanTeen')} style={{textAlign:"center",top:'5%'}}>CanTeen</Text>
       </View>
       <View style={{flex:1}}>
       <Image style={{left:'5%'}} source={require('../assets/check4.png')} />
       <Text style={{textAlign:"center",top:'5%'}}> Royal flying doctor service </Text>
       </View>
       </View>
      

       

       
      
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
