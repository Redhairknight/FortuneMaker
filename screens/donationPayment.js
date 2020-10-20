import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class donationPayment extends React.Component{
  render(){
      return (
          <SafeAreaView style={styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer}>

                  {/* Main contents */}
                  <View style={styles.bottom}>

                    <View style={styles.bottomHeader}>
                      <Text style={styles.bottomEachTextTitle}>
                        Enter your personal detail
                      </Text>
                    </View>

                    <View style={styles.bottomMiddle}>
                      <TextInput style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your name" textAlign="left"/>
                      <View style={styles.lineBreak}></View>
                      <TextInput style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your email" textAlign="left"/>
                      <View style={styles.lineBreak}></View>
                      <TextInput style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your address(optional)" textAlign="left"/>

                    </View>

                    <View style={styles.bottomPayLink}>
                      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("DonationPaymentSuccess")} style={styles.payBtn}>
                        <Image style={styles.payImg} source={require("../assets/paypal.png")}/>
                        <Text style={styles.payText}> Pay by PayPal</Text>
                      </TouchableWithoutFeedback>
                      <View style={styles.lineBreak}></View>
                      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("DonationPaymentSuccess")} style={styles.payBtn}>
                        <Image style={styles.payImg} source={require("../assets/credit-card.png")}/>
                        <Text style={styles.payText}> Pay by Card</Text>
                      </TouchableWithoutFeedback>
                      <View style={styles.lineBreak}></View>
                      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("DonationPaymentSuccess")} style={styles.payBtn}>
                        <Image style={styles.payImg} source={require("../assets/apple-pay.png")}/>
                        <Text style={styles.payText}> Pay by Apple</Text>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
              </ScrollView>
          </SafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  contentContainer:{
      height:"100%",
  },
  head:{
      flex:1,
      backgroundColor: "#1F4E79",
      justifyContent:"center",
  },
  headText:{
      fontSize: 25,
      color: "#FFFFFF",
      fontWeight: "bold",
      alignSelf:"center",
  },
  bottom:{
      flex:5,
  },
  bottomEachTextTitle:{
    fontSize:25,
    color:"#1F4E79",
    fontWeight:"bold",
    alignSelf:"center"
},
  bottomHeader:{
    // flex:1,
    justifyContent:"center"
  },
  bottomMiddle:{
    flex:1,
    justifyContent:'center',
  },
  bottomPayLink:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bgRed:{
      backgroundColor:"red"
  },
  bgYellow:{
      backgroundColor:"yellow",
  },
  bgGreen:{
      backgroundColor:"green"
  },
  marginTop15:{
      marginTop:30,
  },
  marginLeft50:{
      marginLeft:"50%",
  }
  ,
  buttonText:{
      fontSize:20,
      color:"white"
  },
  lineBreak:{
      height:25
  },
  payBtn:{
    borderRadius:45,
    borderColor:"#1F4E79",
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:40,
    flexDirection:'row'
  },
  payImg:{
    width:20,
    height:20
  },
  payText:{
    color:"#1F4E79",
    fontSize:20
  }

})


export default donationPayment
