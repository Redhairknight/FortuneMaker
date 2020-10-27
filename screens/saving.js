/**
author: Chang Liu 
*/
import React, {useEffect, useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-web'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

// import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'

// import fonts
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import { AppLoading } from 'expo';

// import Component from '../components/AppText';
import retrieveDatabse from '../components/DatabaseManager'
import AppButton from '../components/AppButton';
import ProcessBar from '../components/ProcessBar';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
// import retrieveApi from "../components/ApiManager";

class SavingOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listingData: [],
        }
    }

    // capture the data before it loads
    componentWillMount() {

        var that = this;
        var userId = firebase.auth().currentUser.uid;
        let q = firebase.database().ref('Transaction/' + userId);
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function (data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
            })
        }).then(function () {
            that.setState({
                listingData: finished
            })
        })
    }

    render() {
        var balance = retrieveDatabse("/Account/account1/Balance");
        var available = retrieveDatabse("/Account/account1/Available");
        var item = retrieveDatabse("/Transaction/1/title");

        return (
          <View style={styles.container}>
            <ImageBackground
              style={styles.usage}
              source={require("../assets/Welcome/Royal.jpg")}
            >
              <Image
                style={styles.shopLogo}
                source={require("../assets/transaction.png")}
              />
              {this.state.listingData.map(function (x) {
                return (
                  <View style={styles.textContainer} key={x.key}>
                    <Text style={styles.sectionText}>
                      Your last spending is
                    </Text>
                    <Text style={styles.sectionText}>${x.price} On</Text>
                    <Text style={styles.highlightText}>{x.name}</Text>
                  </View>
                );
              })}
              <View style={styles.buttonContainer}>
                <Button
                  title="See detail"
                  onPress={() => this.props.navigation.navigate("SavingPie")}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.savingGoal}
              source={require("../assets/Welcome/Joomla.jpg")}
            >
              <Image
                style={styles.shopLogo}
                source={require("../assets/Welcome/money.png")}
              />
              <Text style={styles.goalHeader}>Saving for your future</Text>
              <View style={styles.buttonContainer2}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("SavingGoal")}
                >
                  <Text style={styles.text}>Set up Goal!</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={styles.creditCard}>
              <TouchableOpacity
                style={styles.creditCardSection}
                onPress={() => this.props.navigation.navigate("SavingDetail")}
              >
                <ImageBackground
                  style={styles.imageBackground}
                  imageStyle={{ borderRadius: 12 }}
                  source={require("../assets/Welcome/Royal.jpg")}
                >
                  <View style={styles.bankLogoSection}>
                    <Image
                      style={styles.bankLogo}
                      source={require("../assets/Welcome/commonwealth.png")}
                    />
                  </View>
                  <View style={styles.bankDetail}>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Available Funds:</Text>
                      <Text style={styles.creditValue}>${available}</Text>
                    </View>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Current Balance:</Text>
                      <Text style={styles.creditValue}>${balance}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.creditCardSection}
                onPress={() => this.props.navigation.navigate("UpBankTransaction")}
              >
                <ImageBackground
                  style={styles.imageBackground}
                  imageStyle={{ borderRadius: 12 }}
                  source={require("../assets/Welcome/Royal.jpg")}
                >
                  <View style={styles.bankLogoSection}>
                    <Image
                      style={styles.bankLogo}
                      source={require("../assets/Welcome/upbank.png")}
                    />
                  </View>
                  <View style={styles.bankDetail}>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Available Funds:</Text>
                      <Text style={styles.creditValue}>$64,000</Text>
                    </View>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Current Balance:</Text>
                      <Text style={styles.creditValue}>$73,653</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={styles.creditCardSection}>
                <ImageBackground
                  style={styles.imageBackground}
                  imageStyle={{ borderRadius: 12 }}
                  source={require("../assets/Welcome/Royal.jpg")}
                >
                  <View style={styles.bankLogoSection}>
                    <Image
                      style={styles.bankLogo}
                      source={require("../assets/Welcome/citibank.png")}
                    />
                  </View>
                  <View style={styles.bankDetail}>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Available Funds:</Text>
                      <Text style={styles.creditValue}>$64,000</Text>
                    </View>
                    <View style={styles.bankDetailText}>
                      <Text style={styles.creditText}>Current Balance:</Text>
                      <Text style={styles.creditValue}>$73,653</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    usage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    savingGoal: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    creditCard: {
        flex: 3,
        flexDirection: 'column',
    },
    creditCardSection: {
        flex: 1,
        borderRadius: 12,
        margin: 8,
        marginHorizontal: 30,
        flexDirection: 'row',
    },
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
    },
    bankLogoSection: {
        flex: 1,
        justifyContent: 'center',
    },
    bankLogo: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    bankDetail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    bankDetailText: {
        flexDirection: 'row',
    },
    creditText: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 12,
        paddingBottom: 5,
    },
    creditValue: {
        color: "#D3D3D3",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: '900',
        marginLeft: 5,
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    shopLogo: {
        position: 'absolute',
        top: 20,
        width: 70,
        height: 70,
    },
    textContainer: {
        position: 'relative',
        top: 150,
        alignItems: 'center',
        marginBottom: 100,
    },
    sectionText: {
        color: colors.light,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: '600',
        textTransform: "capitalize",
        paddingBottom: 5,
    },
    goalHeader: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: "capitalize",
        paddingTop: 15,
    },
    highlightText: {
        color: colors.light,
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: "capitalize",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 5,
    },
    buttonContainer2: {
        position: 'absolute',
        bottom: 50,
    },
    goalContainer: {
        flexDirection: "row",
        flex: 1,
    },
    goalBar: {
        flex: 2,
        backgroundColor: colors.white,
        margin: 2,
        borderRadius: 25,
    },
    goalText: {
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: '600',
        textTransform: "capitalize",
    },
    goalTextSection: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalSection: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        height: 90,
        width: 400,
        margin: 2,
    },
    icon: {

    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});
export default SavingOne;