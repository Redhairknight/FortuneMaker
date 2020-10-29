import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, ScrollView, Alert} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Record user status and give pay link
class donationPayment extends React.Component{

  //Record user information and display on the screen
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      email:"",
    }
  }

  render(){

    const charityName = this.props.navigation.getParam('charityName');
    const money = this.props.navigation.getParam('money');
    const userName = this.state.userName;
    const email = this.state.email;
    const navi = this.props.navigation;
    // Alter message if user didn't input the email and name
    function checkNameAndEmail(){
      if (userName == "" || email == ""){
        Alert.alert("Missing something","Please fill your information",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      } else{
        navi.navigate("DonationPaymentSuccess",
        {
          charityName: charityName,
          money: money,
          userName: userName,
          email: email,
        })
      }
    }

      return (
              <ScrollView contentContainerStyle={styles.contentContainer}>


                    {/* User input info */}
                    <View style={styles.bottomMiddle}>
                      <Text style={styles.bottomEachTextTitle}>
                        Please input your information
                      </Text>
                      <View style={styles.lineBreak}></View>
                      <TextInput onChangeText={(text)=>this.setState({userName:text})} style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your name" textAlign="left"/>
                      <View style={styles.lineBreak}></View>
                      <TextInput onChangeText={(text)=>this.setState({email:text})} style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your email" textAlign="left"/>

                    </View>

                    {/* Let user confirm the info */}
                    <View style={styles.bottomMiddle}>
                      <Text style={styles.bottomEachTextTitle}>
                        Confirm your donation detail
                      </Text>
                      <View style={styles.lineBreak}></View>
                      <View style={{borderColor:"#1F4E79",borderWidth:2,width:"80%",marginLeft:"10%"}}>
                      <Text style={styles.bottomEachTextContent}>
                        Charity Name: {charityName}
                      </Text>
                      <Text style={styles.bottomEachTextContent}>
                        Donation Amount: $ {money}
                      </Text>
                      <Text style={styles.bottomEachTextContent}>
                        Your Name: {this.state.userName}
                      </Text>
                      <Text style={styles.bottomEachTextContent}>
                        Your Email: {this.state.email}
                      </Text>
                      </View>
                    </View>

                    {/* Provide pay link */}
                    <View style={styles.bottomPayLink}>
                      <TouchableWithoutFeedback onPress={()=>checkNameAndEmail()} style={styles.payBtn}>、
                      {/* https://www.flaticon.com/free-icon/paypal_888871?term=paypal&page=1&position=4 */}
                        <Image style={styles.payImg} source={require("../assets/paypal.png")}/>
                        <Text style={styles.payText}> Pay by PayPal</Text>
                      </TouchableWithoutFeedback>
                      <View style={styles.lineBreak}></View>
                      <TouchableWithoutFeedback onPress={()=>checkNameAndEmail()} style={styles.payBtn}>
                      {/* https://www.flaticon.com/free-icon/credit-card_633611?term=card&page=1&position=1 */}
                        <Image style={styles.payImg} source={require("../assets/credit-card.png")}/>
                        <Text style={styles.payText}> Pay by Card</Text>
                      </TouchableWithoutFeedback>
                      <View style={styles.lineBreak}></View>
                      <TouchableWithoutFeedback onPress={()=>checkNameAndEmail()} style={styles.payBtn}>
                      {/* https://www.flaticon.com/free-icon/apple-pay_825455?term=apple%20pay&page=1&position=2 */}
                        <Image style={styles.payImg} source={require("../assets/apple-pay.png")}/>
                        <Text style={styles.payText}> Pay by Apple</Text>
                      </TouchableWithoutFeedback>
                    </View>
              </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  contentContainer:{
      flexGrow:1
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
      flex:1,
  },
  bottomEachTextTitle:{
    fontSize:25,
    color:"#1F4E79",
    fontWeight:"bold",
    alignSelf:"center"
},
bottomEachTextContent:{
  fontSize:20,
  color:"#1F4E79",
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
