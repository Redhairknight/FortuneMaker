import React, { Component, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text, View, ScrollView, ImageBackground, Image, Button, TouchableHighlight } from 'react-native';
import { ceil } from 'react-native-reanimated';
import retrieveDatabse from "../components/DatabaseManager";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, Divider } from 'react-native-elements';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'
// import component
// import ListItem from '../components/ListItem';
import {getTrans} from '../components/DatabaseIterate';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class SavingDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    componentWillMount(){
    
        var that = this;
        var userId = firebase.auth().currentUser.uid;
        let q = firebase.database().ref('Transaction/' + userId);
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function(data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
                console.log("finished:" + finished)
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
                    <Image style={styles.image} source={require('../assets/t_back.jpg')} />
                    {
                        this.state.listingData.map(function(x){
                            return(
                                <Swipeable key={x.key}>
                                    <TouchableHighlight 
                                        underlayColor={colors.light}>
                                        <View style={styles.containter}>
                                            <Image style={styles.imageL}source={require('../assets/Welcome/commonwealth.png')}/>
                                            <View>
                                                <Text style={styles.title}>{x.name}</Text>
                                                <Text style={styles.subTitle}>{x.description}</Text>
                                                <Text style={styles.price}>${x.price}</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                
                                {/* <View>
                                <Text>{x.description}</Text>
                                <Text>{x.price}</Text>
                                <Text>{x.title}</Text>
                                </View> */}
                                </Swipeable>
                            )
                        })
                    }
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
        height: 300,
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
    }
});
