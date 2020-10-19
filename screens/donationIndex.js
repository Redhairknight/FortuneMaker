import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView, TextInput} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function donationIndex({navigation}){

      const [money, setMoney] = React.useState(0);
      const [title, setTitle] = React.useState("Please Select Your Money");
      const [text,setText] = React.useState("");

      function onPressMoney(param) {
        setMoney(param);
        setTitle("You are going to donate $ " + money)
      }

      function onEditMoney(){
        setTitle("You are going to donate $ " + text);
      }

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* Header of this page */}
                    <View style={styles.head}>
                        <Text style={styles.headText}>
                            Step 2 - Give Donation
                        </Text>
                    </View>
                    {/* Main contents */}
                    <View style={styles.bottom}>
                      <View style={styles.selectMoneyHeader}>
                        <Text style={[styles.regularyText]}>{title}</Text>
                      </View>

                        <TouchableWithoutFeedback style={styles.selectMoneyHeader} onPress={()=>onPressMoney(10)}>
                          <Text style={styles.regularyText}>$ 10</Text>
                        </TouchableWithoutFeedback>

                      <TouchableWithoutFeedback style={styles.selectMoney} onPress={()=>onPressMoney(20)}>
                          <Text style={styles.regularyText}>$ 20</Text>
                        </TouchableWithoutFeedback>

                      <TouchableWithoutFeedback style={styles.selectMoney} onPress={()=>onPressMoney(50)}>
                          <Text style={styles.regularyText}>$ 50</Text>
                        </TouchableWithoutFeedback>

                      <View style={styles.selectMoney}>
                        <TextInput textAlign="center" placeholderTextColor="white" placeholder="Set you own " keyboardType="numeric" style={styles.regularyText} onEndEditing={()=>onEditMoney()} onChangeText={(text)=>setText(text)}/>
                      </View>

                      <View style={styles.selectContinue}>
                        <Text onPress={()=> navigation.navigate("DonationPayment")} style={styles.regularyText}>Click To Continue</Text>
                      </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    };

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
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf:"center",
    },
    bottom:{
        flex:5,
        // backgroundColor: "pink",
    },
    bottomEach:{
        flex:1,
        justifyContent:"center",

    },
    bottomEachTextTitle:{
        fontSize:25,
        color:"#1F4E79",
        fontWeight:"bold",
        alignSelf:"center"
    },
    bottomEachTextContent:{
        fontSize:25,
        color:"#1F4E79",
        fontStyle: "italic",
        alignSelf:"center"
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
    buttons:{
        backgroundColor:"#1F4E79",
        width:"55%",
        height:30,
        marginLeft:"25%",
        alignItems:"center",
        borderRadius:15,
    },
    buttonText:{
        fontSize:20,
        color:"white"
    },
    lineBreak:{
        height:15
    },
    selectMoneyHeader:{
      alignSelf:"center",
      width:"75%",
      backgroundColor:"#407CB3",
      marginTop:45,
      height:50,
      borderRadius:25,
      flexDirection:"column",
      justifyContent:"center"
    },
    selectMoney:{
      alignSelf:"center",
      width:"75%",
      backgroundColor:"#407CB3",
      marginTop:20,
      height:60,
      borderRadius:25,
      flexDirection:"column",
      justifyContent:"center"
    },
    selectContinue:{
      alignSelf:"center",
      width:"75%",
      backgroundColor:"#1F4E79",
      marginTop:50,
      height:50,
      borderRadius:25,
      flexDirection:"column",
      justifyContent:"center"
    },
    regularyText:{
      fontSize:20,
      color:"white",
      fontWeight:"bold",
      alignSelf:"center",
      textAlignVertical:"center",
      includeFontPadding:false,
      height:"100%"

    }
})

export default donationIndex;
