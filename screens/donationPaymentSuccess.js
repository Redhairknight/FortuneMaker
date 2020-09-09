import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,

} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, ScrollView } from "react-native-gesture-handler";



function PaymentSuccess({navigation}) {


  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#1F4E79",
          width: "100%",
          height: "15%",
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
          Payment Succeed
        </Text>
      </View>

      {/*main bar*/}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "75%",
        }}
      >
        {/** Fixed thank you message */}
        <View style={{flex:1}}>
          <Text style={{fontSize:20,margin:"15%",marginBottom:0,lineHeight:25, color:"#1F4E79"}}>
            We have received your kindly payment.
            We promise the money will be transfered to the charity within 7 days.
          </Text>
          <Text  style={{fontSize:20,margin:"15%",marginTop:0,lineHeight:25, color:"#1F4E79"}}>
            You can access the donation status through your profile or click:
          </Text>
        </View>
        {/** Navigate to profile or donation index */}
        <View style={{flex:1}}>
          <View style={{height:"25%", width:"31%",borderRadius:45, marginTop:"5%",marginBottom:"5%",left:"33%",borderColor:"blue",borderWidth:1,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20}} onPress={()=>navigation.navigate('DonationHome')}>My Profile</Text>
          </View>
          <View style={{height:"25%", width:"40%",borderRadius:45, marginTop:"5%",marginBottom:"5%",left:"29%",borderColor:"blue",borderWidth:1,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:20}} onPress={()=>navigation.navigate('DonationHome')}>Donate More</Text>
          </View>

        </View>

      </View>

      {/** Main bar finishes */}
 

    </View>
    </ScrollView>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});


export default PaymentSuccess;