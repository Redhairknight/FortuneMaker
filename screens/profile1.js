import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Constants from 'expo-constants';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from 'firebase'
import { NavigationActions } from 'react-navigation';


class profile1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          uname : ""
        }
      }

    UNSAFE_componentWillMount(){
    var uname = firebase.auth().currentUser.displayName;
    this.setState({uname:uname});
    console.log(this.state.uname)
}
    render(){

        const uname = this.state.uname;
        return (
            <ImageBackground style={styles.usage}
                source={require('../assets/profile1.png')}>                  

            <View style={styles.headContainer}>
                <Image style={styles.headImg} source={require('../assets/profile2.png')}/>
                <Text style={styles.headText}>Hi, {uname}</Text>
            </View>



            <View style={styles.flex_Four}>
                <TouchableWithoutFeedback onPress={() => {
                                this.props.navigation.navigate(
                                    'Saving',
                                    {},
                                    NavigationActions.navigate({
                                        routeName: 'SavingPie'
                                    })
                                )
                            }} style={styles.flex_Four_Each_Saving}>
                    <View style={styles.nav_btn}>
                    <Image style={styles.btn_img} source={require("../assets/piggy-bank.png")}/>
                    <Text style={styles.btn_text}>
                        Saving
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback onPress={() => {
                                this.props.navigation.navigate(
                                    'Investment',
                                    {},
                                    NavigationActions.navigate({
                                        routeName: 'TransactionHistory'
                                    })
                                )
                            }} style={styles.flex_Four_Each_Investment}>
                    <View style={styles.nav_btn}>
                        <Image style={styles.btn_img} source={require("../assets/profits.png")}/>
                        <Text style={styles.btn_text}>
                            Investment
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                                this.props.navigation.navigate(
                                    'Donation',
                                    {},
                                    // NavigationActions.navigate({
                                    //     routeName: 'DonationHistory'
                                    // })
                                )
                            }} style={styles.flex_Four_Each_Donation}>
                    <View style={styles.nav_btn}>
                    <Image style={styles.btn_img} source={require("../assets/solidarity.png")}/>
                    <Text style={styles.btn_text}>
                        Donation
                    </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={{height:80}}>
                <TouchableWithoutFeedback onPress={() => firebase.auth().signOut()}>
                    <View style={styles.logOutBtn}>
                        <Text style={styles.logOutText}>
                            LOG OUT
                        </Text>
                    </View>  
                </TouchableWithoutFeedback> 
            </View>  

            
        </ImageBackground>
    );
}
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor:"green"
        },
        headContainer:{
            // flex:1,
            height:300,
        },
        flex_Four:{
            height:200,
            flexDirection:"row",
            flexWrap:"wrap",
            // backgroundColor:"green",
            paddingBottom:60,
            paddingTop:5
        },
        flex_Four_Each_Saving:{
            flex:1,
            justifyContent:"center",
            backgroundColor:"#1273cc"
        },
        flex_Four_Each_Investment:{
            flex:1,
            justifyContent:"center",
            backgroundColor:"#3584cc"
        },
        flex_Four_Each_Donation:{
            flex:1,
            justifyContent:"center",
            backgroundColor:"#72a1cc"
        },
        nav_btn:{
            width:130,
            alignItems:"center",
            // backgroundColor:"red",
            // textAlignVertical:"center"
        },
        nav_btn_1:{

            alignItems:"center",
            // backgroundColor:"red",
            // textAlignVertical:"center"
        },
        flex_Three:{
            flex:3
        },
        logOutBtn:{
            width:"50%",
            height:60,
            // marginTop:30,
            marginLeft:"25%",
            borderRadius:0,
            borderWidth:2,
            borderColor:"#1F4E79",
            flexDirection:"column",
            justifyContent:"center",
            // backgroundColor:"white"
            // alignSelf:"center",
        },
        logOutText:{
            color:"#1F4E79",
            fontWeight:"bold",
            fontSize:30,
            textAlignVertical:"center",
            includeFontPadding:false,
            alignSelf:"center",
        }
        ,
        usage: {
            flex:1,
        },
        headImg:{
            width:150,
            height:150,
            marginLeft:"32.5%",
            marginTop:"20%"
        },
        headText:{
            fontSize:30,
            color:"white",
            alignSelf:"center",
            marginTop:25,
            fontWeight:"bold",
        },
        btn_img:{
            height:70,
            width:70,
            alignSelf:"center"
        },
        btn_text:{
            fontSize:20,
            color:"white"
        }
    })
export default profile1;