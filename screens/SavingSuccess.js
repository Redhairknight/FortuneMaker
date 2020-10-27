import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { CommonActions, NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'
// import component
import retrieveDatabse from "../components/DatabaseManager"
import { NavigationActions } from 'react-navigation';

// Change StackActions to NavigationActions if using v1
const resetAction = CommonActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Investment' })],
});

export default class SavingSuccess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adata: 'have not set up',
        }
    }

    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                adata: "app"
            })
        }, 2000)
    }

    componentDidMount() {
        this.getData();
    }

    componentWillMount() {
        var userId = firebase.auth().currentUser.uid;
        // fetch data passed from previous page
        const description = this.props.navigation.getParam('description');
        const price = this.props.navigation.getParam('price');
        const month = new Date().getMonth() + 1;
        const date = new Date().getFullYear() + '-' + month + '-' + new Date().getDate();
        const gmtDate = new Date().toString();
        firebase.database().ref(userId + "/" + 'Saving/Goals/' + gmtDate).set({
            description: description,
            price: price,
            date: date,
        });
    }

    render() {
        var userId = firebase.auth().currentUser.uid;
        var balance = retrieveDatabse("/" + userId + "/Saving/Account/Card1/Balance");
        var available = retrieveDatabse("/" + userId + "/Saving/Account/Card1/Available");
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {/* Main contents */}
                    <View style={styles.bottom}>
                        <View style={styles.bottomHeader}>
                            <Text style={styles.thankYouForPayment}>
                                One more step ahead
                      </Text>
                        </View>
                        <View style={styles.bottomHeader}>
                            <Text style={styles.bottomEachTextTitle}>
                                You currently has ${balance} balance and ${available} in your Account.
                      </Text><Text style={styles.bottomEachTextTitle}>
                                For better ultilize your money, we do encourage you:
                      </Text>
                        </View>
                        <View style={styles.bottomMiddle}>
                            <TouchableWithoutFeedback onPress={() => {
                                this.props.navigation.navigate(
                                    'Investment',
                                    {},
                                    NavigationActions.navigate({
                                        routeName: 'ProductsDetail'
                                    })
                                )
                                console.log('it is clicked')
                            }} style={styles.payBtn}>
                                <Image style={styles.payImg} source={require("../assets/investment.png")} />
                                <Text style={styles.payText}> Investment</Text>
                            </TouchableWithoutFeedback>
                            <View style={styles.lineBreak}></View>

                            <TouchableWithoutFeedback onPress={() => {
                                this.props.navigation.navigate(
                                    'Donation',
                                    {},
                                    NavigationActions.navigate({
                                        routeName: 'DonationEntry'
                                    })
                                )
                                console.log('it is clicked')
                            }} style={styles.payBtn}>
                                <Image style={styles.payImg} source={require("../assets/heart.png")} />
                                <Text style={styles.payText}> Donation</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        height: "100%",
    },
    head: {
        flex: 1,
        backgroundColor: "#1F4E79",
        justifyContent: "center",
    },
    headText: {
        fontSize: 40,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf: "center",
    },
    bottom: {
        flex: 5,
    },
    thankYouForPayment: {
        fontSize: 40,
        color: "#1F4E79",
        alignSelf: "center",
        fontWeight: "bold"
    },
    bottomEachTextTitle: {
        fontSize: 20,
        color: "#1F4E79",
        alignSelf: "center",
        lineHeight: 30,
    },
    bottomHeader: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "5%"
    },
    bottomMiddle: {
        flex: 2,
        justifyContent: 'center',
        marginTop: 0
    },
    bottomPayLink: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgRed: {
        backgroundColor: "red"
    },
    bgYellow: {
        backgroundColor: "yellow",
    },
    bgGreen: {
        backgroundColor: "green"
    },
    marginTop15: {
        marginTop: 30,
    },
    marginLeft50: {
        marginLeft: "50%",
    }
    ,
    buttonText: {
        fontSize: 20,
        color: "white"
    },
    lineBreak: {
        height: 25
    },
    payBtn: {
        marginLeft: 92,
        borderRadius: 45,
        borderColor: "#1F4E79",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        flexDirection: 'row'
    },
    payImg: {
        width: 20,
        height: 20
    },
    payText: {
        color: "#1F4E79",
        fontSize: 20
    },

})