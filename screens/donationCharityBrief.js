import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, ScrollView, ListView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'

//Choose the charity
class donationCharityBrief extends React.Component{

  render(){
      return (
          <SafeAreaView style={styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer}>

                  {/* Six different charities display */}
                  <View style={styles.bottom}>


                      <View style={styles.bottomEach}>
                      <TouchableOpacity style={styles.bottomEach} onPress={()=>this.props.navigation.navigate("AKF")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check1.png")}/>
                          <Text>
                            Australian Koala Foundation
                          </Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomEach} onPress={()=>this.props.navigation.navigate("GuideDogs")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check2.png")}/>
                          <Text>
                          Guide Dogs
                          </Text>
                        </View>
                        </TouchableOpacity>


                      </View>

                      <View style={styles.bottomEach}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate("CanTeen")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check3.png")}/>
                          <Text>
                            CanTeen
                          </Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("FlyingDoctor")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check4.png")}/>
                          <Text>
                            Royal Flying Doctor
                          </Text>
                        </View>
                        </TouchableOpacity>


                      </View>

                      <View style={styles.bottomEach}>
                      <TouchableOpacity style={styles.bottomEach} onPress={()=>this.props.navigation.navigate("CareFlight")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check5.png")}/>
                          <Text>
                            CareFlight
                          </Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomEach} onPress={()=>this.props.navigation.navigate("Fred")}>
                        <View style={styles.eachImageView}>
                          <Image style={{height:150,width:150}} source={require("../assets/check6.png")}/>
                          <Text>
                            The Fred
                          </Text>
                        </View>
                        </TouchableOpacity>


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
  head:{
      flex:1,
      backgroundColor: "#1F4E79",
      justifyContent:"center",
  },
  headText:{
      fontSize: 30,
      color: "#FFFFFF",
      fontWeight: "bold",
      alignSelf:"center",
  },
  bottom:{
      flex:5,
  },
  bottomEach:{
      flex:1,
      flexDirection:'row',
      padding:5
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
      height:15
  },
  eachImageView:{
    width:190,
    alignItems:'center'
  }
})


export default donationCharityBrief
