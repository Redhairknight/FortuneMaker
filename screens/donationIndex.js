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
  ScrollView,
} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from "react-native-gesture-handler";



function donationIndex({navigation}) {
  var confirmSquareBGC = "white";

  function handlePress() {
    alert("you tapped sth");
    
  }

  function ConfirmBtn(){
    var [isConfirm, setIsConfirm] = React.useState(false);


    var touchProps={
      style : isConfirm ? styles.squarePress : styles.squareNotPress,
      onPress: ()=> setIsConfirm(!isConfirm),
      underlayColor: "white",
      activeOpacity: 0,
    }

    return (
      <TouchableHighlight {...touchProps}>

      </TouchableHighlight>
    )
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1,}}>
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
          Hi, User
        </Text>
      </View>

      {/*main bar*/}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >

      {/** Start of give once & give regularly */}
      <View style={styles.regularAndOnceBar}>
          <View style={[styles.regularAndOnceCenter,styles.regularAndOnceItem, styles.borderOnRight]}>

            <Text style={styles.font}>Give Once</Text>

          </View>

        <View style={[styles.regularAndOnceCenter,styles.regularAndOnceItem]}>
          <Text style={styles.font}>Give Regular</Text>
        </View>
      </View>
      {/** End of give once & give regularly */}

      <Text style={{fontSize:12, alignItems:"center",justifyContent:"center", marginLeft:"35%",marginTop:"3%", color:"#1F4E79"}}>I would like to give to</Text>

      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter]}>
        <Text style={[styles.font]}>Child Charity</Text>
      </View>
      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter]}>
        <Text style={[styles.font]}>$ 50</Text>
      </View>
      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter]}>
        <Text style={[styles.font]}>$ 100</Text>
      </View>
      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter]}>
        <Text style={[styles.font]}>Other</Text>
      </View>
      <View style={{height:35,flexDirection:"row",marginTop:"5%"}}>
        <View style={{flex:1,marginLeft:"15%"}}>
        <ConfirmBtn/>
        </View>

        <View style={{marginLeft:"2%", flex:10}}><Text style={{fontSize:16}}>This donation is on behalf of Charity</Text></View>
      </View>
      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter, {backgroundColor:"#1C4C75"}]}>
        <Text onPress={()=>navigation.navigate('DonationPayment')}style={[styles.font]}>Click to Continue</Text>
      </View>
      <View style={[styles.donationMainSelectionBar,styles.regularAndOnceCenter, {backgroundColor:"#1C4C75"}]}>
        <Text onPress={()=>navigation.navigate('DonationCharityBrief')} style={{fontSize:18, color:"white"}}>See more details</Text>
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
    borderRightWidth:1,
    borderColor:"#FFFFFF"
  },
  squareNotPress: {
    width:20,
    height:20,
    borderColor:"black",
    borderWidth:2,
    backgroundColor:"white",
    borderRadius:0,
  },
  squarePress :{
    width:20,
    height:20,
    borderColor:"black",
    borderWidth:2,
    backgroundColor:"blue",
    borderRadius:0,
  }
  ,
  wrap:{
    flex:1,
    flexWrap:"wrap",
  }
});



const paymentStyle = StyleSheet.create(
  {
    paymengInfo:{
      margin:"5%",
      borderWidth:1,
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

export default donationIndex;