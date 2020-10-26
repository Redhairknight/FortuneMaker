import React, { Component, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight } from 'react-native';
import { ceil } from 'react-native-reanimated';
import retrieveDatabse from "../components/DatabaseManager";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, Divider } from 'react-native-elements';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase';
import {getTrans} from '../components/DatabaseIterate';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Get and show donation history of user
export default class donationHistory extends Component {
  constructor(props){
    super(props);

    this.state = {
        listingData: []
    }
}

  // capture the data before it loads
  componentWillMount(){

    var that = this;
    var userID = firebase.auth().currentUser.uid;
    let q = firebase.database().ref('Donation/History/' + userID);
    var finished = [];

    q.once('value', snapshot => {
        snapshot.forEach(function(data) {
          let result = data.val();
          result['key'] = data.key;
          finished.push(result);

        })
    }).then(function(){
        that.setState({
            listingData: finished
        })
    })
}



render() {             
  return (
      <SafeAreaView style={styles.screen}>
          <ScrollView>
              <Image style={styles.image} source={require('../assets/thankyou.jpg')} />
              {
                  this.state.listingData.map(function(x){
                    {/* Return corresponding img url of charities */}
                      function getPath(){
                        var url = ''
                        if (x.charityName == "AKF"){url = require('../assets/check1.png')}
                        else if (x.charityName == "GuideDogs"){url=require('../assets/check2.png')}
                        else if (x.charityName == "CanTeen"){url = require('../assets/check3.png')}
                        else if (x.charityName == "FlyingDoctor"){url = require('../assets/check4.png')}
                        else if (x.charityName == "CareFlight"){url = require('../assets/check5.png')}
                        else if (x.charityName == 'Fred'){url = require('../assets/check6.png')}
                        return url;
                      }

                        var url = getPath();
                        {/* Recursively render the page */}
                      return(
                          <Swipeable key={x.key}>
                              <TouchableHighlight 
                                  underlayColor={colors.light}>
                                  <View style={styles.containter}>
                                      <Image style={styles.imageL} source={url}/>
                                      <View>
                                          <Text style={styles.title}>Donate To: {x.charityName}</Text>
                                          <Text style={styles.subTitle}>Dear {x.userName}</Text>
                                          <Text style={styles.price}>Thanks for your ${x.money}</Text>
                                          <Text style={styles.price}>Date: {x.date}</Text>
                                      </View>
                                  </View>
                              </TouchableHighlight>
                          </Swipeable>
                      )
                  })
              }
              <TouchableWithoutFeedback
                  onPress ={()=> this.props.navigation.navigate("DonationEntry")}
              >
              <View style={styles.buttons}>
                  <Text style={styles.buttonText}>
                      Back to Index Page
                  </Text>

              </View>

              </TouchableWithoutFeedback>

          </ScrollView>
      </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
screen: {
  // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  flex: 1,
},
separator: {
  width:"90%", 
  height: 2, 
  backgroundColor:colors.black,
  alignSelf: 'center'
},
renderContainer: {
  backgroundColor: colors.danger,
  width: 70,
  justifyContent: 'center',
  alignItems:'center',
  height: '100%',
},
image: {
  width: '100%',
  height: 150,
},
containter: {
  flexDirection:'row',
  padding: 15,
},
imageL: {
  width: 50,
  height: 50,
  marginRight: 10
},
title: {
  fontWeight: '500',
  fontSize: 20,
},
subTitle: {
  color: colors.medium,
},
price: {
  color: 'blue',
},
buttons:{
  backgroundColor:"#1F4E79",
  width:"40%",
  height:40,
  marginLeft:"30%",
  alignItems:"center",
  borderRadius:45,
  flexDirection:"column",
  justifyContent:"center"
},
buttonText:{
  fontSize:15,
  color:"white",
  textAlignVertical:"center",
  includeFontPadding:false,
},

});