import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class donationEntry extends React.Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* Main contents */}
                    <View style={styles.bottom}>
                        <View style={styles.bottomEach,styles.marginTop15}>
                            <Text style={styles.bottomEachTextTitle}>
                                WHY DONATE?
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Wealth Benefit
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Eduate your kids
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Help Needed People
                            </Text>
                        </View>
                        <View style={styles.buttomEach,styles.marginTop15}>
                            <Text style={styles.bottomEachTextTitle}>
                                WHY US?
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Professional
                            </Text>
                            <Text style={styles.bottomEachTextContent}>
                                - Convenient
                            </Text>
                        </View>
                        <View style={styles.buttomEach,styles.marginTop15}>
                            <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationCharityChoose")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Start Donating
                                </Text>

                            </View>

                            </TouchableWithoutFeedback>
                            <View style={styles.lineBreak}>

                            </View>
                            <TouchableWithoutFeedback
                                onPress ={()=> this.props.navigation.navigate("DonationHistory")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    My Donation History
                                </Text>

                            </View>

                            </TouchableWithoutFeedback>
                            <View style={styles.lineBreak}>

                            </View>
                            {/* <TouchableWithoutFeedback

                                onPress ={()=> this.props.navigation.navigate("DonationCharityChoose")}
                            >
                            <View style={styles.buttons}>
                                <Text style={styles.buttonText}>
                                    Tax Relief Calculation
                                </Text>

                            </View>

                            </TouchableWithoutFeedback> */}
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
        flex:2,
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
})

export default donationEntry;
