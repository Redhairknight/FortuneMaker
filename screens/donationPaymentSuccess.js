import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class donationPaymentSuccess extends React.Component{
  render(){
      return (
          <SafeAreaView style={styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                  {/* Header of this page */}
                  <View style={styles.head}>
                      <Text style={styles.headText}>
                          Payment Succeed!
                      </Text>
                  </View>

                  {/* Main contents */}
                  <View style={styles.bottom}>
                    <View style={styles.bottomHeader}>
                      <Text style={styles.thankYouForPayment}>
                        Thank you for your donation
                      </Text>
                    </View>
                    <View style={styles.bottomHeader}>
                      <Text style={styles.bottomEachTextTitle}>
                        We have received your kindly payment. And we promise the money will be transfered to the charity within 7 days. 
                      </Text><Text style={styles.bottomEachTextTitle}>
                        You can access the donation status through your profile.
                      </Text>
                    </View>
                    <View style={styles.bottomMiddle}>
                    <TouchableWithoutFeedback
                          onPress ={()=> this.props.navigation.navigate("DonationIndex")}
                      >
                      <View style={styles.buttons}>
                          <Text style={styles.buttonText}>
                              My Profile
                          </Text>

                      </View>

                      </TouchableWithoutFeedback>
                      <View style={styles.lineBreak}></View>
                      
                      <TouchableWithoutFeedback
                          onPress ={()=> this.props.navigation.navigate("DonationCharityChoose")}
                      >
                      <View style={styles.buttons}>
                          <Text style={styles.buttonText}>
                              Donate More
                          </Text>

                      </View>

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
      fontSize: 40,
      color: "#FFFFFF",
      fontWeight: "bold",
      alignSelf:"center",
  },
  bottom:{
      flex:5,
  },
  thankYouForPayment:{
    fontSize:40,
    color:"#1F4E79",
    alignSelf:"center",
    fontWeight:"bold"
},
  bottomEachTextTitle:{
    fontSize:20,
    color:"#1F4E79",
    alignSelf:"center",
    lineHeight:30,
},
  bottomHeader:{
    flex:1,
    justifyContent:"center",
    marginLeft:"15%",
    marginRight:"15%",
    marginTop:"5%"
  },
  bottomMiddle:{
    flex:2,
    justifyContent:'center',
    marginTop:0
  },
  bottomPayLink:{
    flex:2,
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
  },
  buttons:{
    backgroundColor:"#1F4E79",
    width:"55%",
    height:40,
    marginLeft:"25%",
    alignItems:"center",
    borderRadius:25,
    flexDirection:"column",
    justifyContent:"center"
},
buttonText:{
    fontSize:20,
    color:"white",
    textAlignVertical:"center",
    includeFontPadding:false,
},

})


export default donationPaymentSuccess
