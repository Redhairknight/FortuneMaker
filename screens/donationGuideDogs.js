import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Charity Guide Dog
class donationGuideDogs extends React.Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
  
                    {/* Main contents */}
                    <View style={styles.bottom}>
                        <View style={styles.mainPartTextView}>
                            <Text style={styles.introductionText}>
                            Since 1960, Guide Dogs Queensland has provided vital support to help people who are blind or have low vision experience the freedom and independence they deserve.
                            </Text>
                        </View>
                        <View style={styles.mainPartBtnView}>
                        <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationIndex",{
                                    charityName:"GuideDogs"
                                })}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Give Donation
                                </Text>

                            </View>

                            </TouchableWithoutFeedback>
                            <View style={styles.lineBreak}></View>
                            <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationCharityChoose")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Other Charities
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
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf:"center",
    },
    bottom:{
        flex:5,
        // flexDirection:"column"
        // backgroundColor: "pink",
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
        height:50,
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
    lineBreak:{
        height:45
    },
    mainPartTextView:{
        justifyContent:"center",
        padding:20,
        marginTop:30,
    },
    mainPartBtnView:{
        justifyContent:"center",
        marginTop:60
    },
    introductionText:{
        alignSelf:"center",
        fontSize:20,
        color:"#1F4E79",
        lineHeight:35
    }

  })
  
export default donationGuideDogs;
