import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class donationCareFlight extends React.Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* Header of this page */}
                    <View style={styles.head}>
                        <Text style={styles.headText}>
                            CareFlight
                        </Text>
                    </View>
  
                    {/* Main contents */}
                    <View style={styles.bottom}>
                        <View style={styles.mainPartTextView}>
                            <Text style={styles.introductionText}>
                            CareFlight is an aeromedical for purpose organisation established in May 1986[2][1] by a group of Australian doctors. CareFlight's mission is 'To save lives, speed recovery and serve the community.' This is achieved through the use of a variety of aircraft including aeromedical helicopters, jets and fixed wing aircraft. CareFlight's vision is 'To be the most advanced integrated aeromedical service trusted by all Australians.'
                            </Text>
                        </View>
                        <View style={styles.mainPartBtnView}>
                        <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationIndex",{
                                    charityName:"CareFlight"
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
        height:25
    },
    mainPartTextView:{
        justifyContent:"center",
        padding:20,
        marginTop:30,
    },
    mainPartBtnView:{
        justifyContent:"center",
        marginTop:40
    },
    introductionText:{
        alignSelf:"center",
        fontSize:20,
        color:"#1F4E79",
        lineHeight:25
    }

  })
  
export default donationCareFlight;
