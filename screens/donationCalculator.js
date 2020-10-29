import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Tax deduction calculator
class donationCalculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          money: "",
          output:"",
        }
      }

    

    render()
    {
        var money = this.state.money;
        var out = this.state.output;
        var that = this;

        // Display output on the screen
        function writeOut(){
            var deduction = Math.ceil(money*0.0267937891);
            out = "$ " + deduction + " per week"
            that.setState({output:out})
        }

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* Main contents */}
                    <View style={styles.bottom}>
                        <View style={styles.bottomEach,styles.marginTop15}>
                            <Text style={styles.bottomEachTextTitle}>
                                Enter your weekly income
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Find out best donation rate
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Get best tax deduction
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Improve wealth management
                            </Text>
                        </View>

                        <View style={styles.bottomCalculator}>

                        {/* After completing the input, call the function to get results */}
                        <TextInput textAlign="center" placeholderTextColor="grey" placeholder="Input your weekly income   " maxLength={6}  keyboardType="numeric" style={styles.regularyText} onChangeText={(text)=>this.setState({money:text})} onEndEditing={()=>writeOut()}/>
                        {/* Output display */}
                        <Text style={styles.regularyTextOut}>We recommend you to donate</Text>
                        <Text style={styles.regularyTextOut}>{out}</Text>
                        </View>

                        {/* Navigate to Charity Choose */}
                        <View style={styles.buttomEach}>
                            <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationCharityChoose")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Start Donating
                                </Text>

                            </View>

                            </TouchableWithoutFeedback>

                            <View style={styles.lineBreak}></View>

                            {/* Navigate to donation home page */}
                            <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationEntry")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Back to Home Page
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
    // contentContainer:{
    //     height:"100%",
    // },
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
        flex:2,
        // backgroundColor: "pink",
    },
    bottomCalculator:{
        flex:1
    }
    ,
    buttomEach:{
        flex:4,
        justifyContent:"center",
        marginTop:75

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
        width:"65%",
        height:60,
        marginLeft:"17.5%",
        alignItems:"center",
        borderRadius:45,
        flexDirection:"column",
        justifyContent:"center"
    },
    buttonText:{
        fontSize:22,
        color:"white",
        textAlignVertical:"center",
        includeFontPadding:false,
    },
    lineBreak:{
        height:15
    },
    regularyText:{
        fontSize:30,
        color:"#1F4E79",
        fontWeight:"bold",
        alignSelf:"center",
        textAlignVertical:"center",
        includeFontPadding:false,
        height:"100%",
  
      },
      regularyTextOut:{
        fontSize:20,
        color:"#1F4E79",
        fontWeight:"bold",
        alignSelf:"center",
        textAlignVertical:"center",
        includeFontPadding:false,
        // height:"100%",
        marginBottom:10
  
      }
})

export default donationCalculator;
