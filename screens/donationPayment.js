import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  PixelRatio,
  TextInput,
} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
function donationPayment({ navigation}){
  return(
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
            marginTop:"7%",
            color:"white",
          }}
        >
          
          Payment
        </Text>
      </View>

      {/*main bar*/}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "85%",
        }}
      >

        {/** Payment Info showing frame */}
        <View style={paymentStyle.paymengInfo}>

          {/**Nominative & Anonymous */}
          <View style={{flex:1, flexDirection:"row", borderTopLeftRadius:15, borderTopRightRadius:15}}>
            <View style={[paymentStyle.borderTopLeftAndRight15,{flex:1, backgroundColor:"#1C4C75",borderTopRightRadius:0}]}>
              <Text style={{fontSize:25,alignSelf:"center", top:"30%",color:"white"}}>
                Nominative
              </Text>

            </View>
            <View style={[paymentStyle.borderTopLeftAndRight15, {flex:1,borderTopLeftRadius:0, backgroundColor:"lightblue"}]}>
              <Text style={{fontSize:25,alignSelf:"center", top:"30%",color:"white"}}>
                Anonymous
              </Text>
            </View>
          </View>
          {/**Personal Info */}
          <View style={{flex:6, borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
            <View style={{flex:1}}>
              <TextInput defaultValue="Your Name" clearTextOnFocus={true} style={{height:"33%", borderColor:"black",borderBottomWidth:2,marginLeft:"7.5%",marginRight:"7.5%", paddingBottom:0, fontSize:20}}/>
              <TextInput defaultValue="Your Email" clearTextOnFocus={true} style={{height:"33%", borderColor:"black",borderBottomWidth:2,marginLeft:"7.5%",marginRight:"7.5%", paddingBottom:0, fontSize:20}}/>
              <TextInput defaultValue="Your Phone" clearTextOnFocus={true} style={{height:"33%", borderColor:"black",borderBottomWidth:2,marginLeft:"7.5%",marginRight:"7.5%", paddingBottom:0, fontSize:20}}/>
            </View>
            <View style={{flex:2, alignContent:"baseline", marginTop:"5%"}}>
              <TextInput editable={false} multiline={true} defaultValue="Here should be listed some information about payment, charity and so on" style={{height:"100%",marginLeft:"7.5%", marginRight:"7.5%",borderColor:"blue", borderWidth:1}}/>
            </View>
            {/** Payment method */}
            <View style={{flex:2}}>
              <View style={{flex:1, borderRadius:45, marginTop:"5%", marginLeft: "20%", marginRight:"20%", borderColor:"blue",borderWidth:1/PixelRatio.get(), justifyContent:"center",alignItems:"center"}}>
                <Text onPress={()=>navigation.navigate('DonationPaymentSuccess')}>GIVE BY PayPal</Text>
              </View>
              <View style={{flex:1, borderRadius:45, marginTop:"5%", marginLeft: "20%", marginRight:"20%", borderColor:"blue",borderWidth:1/PixelRatio.get(),justifyContent:"center",alignItems:"center"}}>
              <Text onPress={()=>navigation.navigate('DonationPaymentSuccess')}>GIVE BY Card</Text>
              </View>
              <View style={{flex:1, borderRadius:45, marginTop:"5%",marginBottom:"5%",marginLeft: "20%", marginRight:"20%", borderColor:"blue",borderWidth:1/PixelRatio.get(),justifyContent:"center",alignItems:"center"}}>
              <Text onPress={()=>navigation.navigate('DonationPaymentSuccess')}>GIVE BY Apple</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/** Main bar finishes */}
 

    </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  regularAndOnceBar:{
     marginTop:"15%",
     marginLeft:"15%",
     marginRight:"15%",
     height:35,
     flexDirection:'row',
     borderRadius:15,
     padding:2,
     backgroundColor:'#2D9900'
  },
  donationMainSelectionBar:{
    marginTop:"5%",
    marginLeft:"15%",
    marginRight:"15%",
    height:35,
    flexDirection:'row',
    borderRadius:15,
    padding:2,
    backgroundColor:'#407CB3'
  },
  regularAndOnceItem:{
    flex:1,
    height: 30
  },
  regularAndOnceCenter:{
    justifyContent:"center",
    alignItems:"center"
  },
  font:{
    color:"#FFFFFF",
    fontSize:16,
    fontWeight:"bold"
  },
  borderOnRight:{
    borderRightWidth:1/PixelRatio.get(),
    borderColor:"#FFFFFF"
  },
  square: {
    width:20,
    height:20,
    borderColor:"black",
    borderWidth:1/PixelRatio.get(),
    backgroundColor:"white",
    borderRadius:0,
  },
  wrap:{
    flex:1,
    flexWrap:"wrap",
  }
});



const paymentStyle = StyleSheet.create(
  {
    paymengInfo:{
      margin:"5%",
      borderWidth:1/PixelRatio.get(),
      borderColor:"#1C4C75",
      borderRadius:15,
      flex:1
    },
    borderTopLeftAndRight15:{
      borderTopLeftRadius:15,
      borderTopRightRadius:15
    },
    borderBottomLeftAndRight15:{
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
    }
  }
)

export default donationPayment;