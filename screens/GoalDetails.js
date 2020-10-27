import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View ,Image, ScrollView, Alert} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Record user status and give pay link
class GoalDetails extends React.Component{

  //Record user information and display on the screen
  constructor(props){
    super(props);
    this.state = {
        description: "",
        price: "",
        initial: ""
    }
  }

  render(){

    const price = this.state.price;
    const description = this.state.description;
    const initial = this.state.initial
    const navi = this.props.navigation;
    // Alter message if user didn't input the email and name
    function formValidation(){
      if (price == "" || description == "" || initial == ""){
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
        navi.navigate("SavingSuccess",
        {
            description: description,
            price: price,
            initial: initial
        })
      }
    }

      return (
              <ScrollView contentContainerStyle={styles.contentContainer}>


                    {/* User input info */}
                    <View style={styles.bottomMiddle}>
                      <Text style={styles.bottomEachTextTitle}>
                        Saving for the future
                      </Text>
                      <View style={styles.lineBreak}></View>
                      <TextInput onChangeText={(text)=>this.setState({description:text})} style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your Goal" textAlign="left"/>
                      <View style={styles.lineBreak}></View>
                      <TextInput onChangeText={(text)=>this.setState({price:text})} style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Saving Goal Amount" textAlign="left"/>
                      <View style={styles.lineBreak}></View>
                      <TextInput onChangeText={(text)=>this.setState({initial:text})} style={{marginLeft:50, marginRight:50, fontSize:25,borderBottomColor:"#1F4E79",borderBottomWidth:2, color:"black"}} placeholder="Your Initial Input" textAlign="left"/>

                    </View>

                    {/* Let user confirm the info */}
                    <View style={styles.bottomMiddle}>
                      <Text style={styles.bottomEachTextTitle}>
                        Confirm your SavingGoal detail
                      </Text>
                      <View style={styles.lineBreak}></View>
                      <View style={{borderColor:"#1F4E79",borderWidth:2,width:"80%",marginLeft:"10%"}}>
                      <Text style={styles.bottomEachTextContent}>
                        Description: {this.state.description}
                      </Text>
                      <Text style={styles.bottomEachTextContent}>
                        Saving Goal: $ {this.state.price}
                      </Text>
                      <Text style={styles.bottomEachTextContent}>
                        Initial Input: $ {this.state.initial}
                      </Text>
                      </View>
                    </View>

                    {/* Provide pay link */}
                    <View style={styles.bottomPayLink}>
                      <TouchableWithoutFeedback onPress={()=>formValidation()} style={styles.payBtn}>
                        <Text style={styles.payText}> Set it up</Text>
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


export default GoalDetails
