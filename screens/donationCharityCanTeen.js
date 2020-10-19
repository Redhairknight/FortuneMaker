import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

function donationCharityCanTeen({navigation}){
  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:"column"}}>
     <View style={{flex:1}}>
        <View style={{ width: 380,  height: 150,backgroundColor: '#1F4E79'}}></View>
      <Text style={{color:'white', fontSize:50,textAlign:"center",top:'-35%'}}>CanTeen</Text>
      </View>
      </View>

      <View style={{flex:1}}>
      <Text style={{color:'#1F4E79', fontSize:20,textAlign:"center",top:'5%'}}>
         CanTeen is an Australian national support organisation for young people (aged 12–25) living with cancer; including cancer patients,their brothers and sisters and young people with parents or primary carers with cancer.</Text>
      </View>
      
  

       <View style={{flex:1, flexDirection:"column"}}>
       <View style={{flex:1}}>
       <Image style={{right:'-5%',width:250,height:50}} source={require('../assets/check5.png')} />
       <Text style={{textAlign:"center",top:'-35%',right:'-5%',color:'white',fontSize:20}}>Give Donations</Text>
       </View>
       <View style={{flex:1}}>
       <Image style={{left:'5%',width:250,height:50}} source={require('../assets/check5.png')} />
       <Text style={{textAlign:"center",top:'-35%',right:'-5%',color:'white',fontSize:20}}> Other Charities </Text>
       </View>
       </View>
       
       <View style={{flex:1, flexDirection:"row",width: 380, height: 200, backgroundColor: '#1F4E79'}} >
       <Image style={{right:'-5%',top:'5%',width:150,height:150}} source={require('../assets/check6.png')} />  
       <Text style={{color:'white',top:'15%',textAlign:"center",width:200,height:200}} >"The day I found out I had cancer my whole world changed in an instant."</Text>
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

export default donationCharityCanTeen;
