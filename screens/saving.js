/**
author: Chang Liu 
*/ 
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons, AntDesign, FontAwesome} from '@expo/vector-icons';
import {Card} from 'react-native-web' 
import {StatusBar} from 'expo-status-bar';
import Constants from 'expo-constants';

// import fonts
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Allerta_400Regular } from '@expo-google-fonts/allerta';
import {AppLoading} from 'expo';
// import AppText from '../components/AppText';

import AppButton from '../components/AppButton';
import ProcessBar from '../components/ProcessBar';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import { NavigationEvents } from 'react-navigation';



function SavingOne ({navigation}) {

    // fonts
    let [fontsLoaded, error] = useFonts({
        Inter_900Black,
        Allerta_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.usage}
                source={require('../assets/Welcome/Royal.jpg')}>
                <Image style={styles.shopLogo} source={require('../assets/Welcome/shop-icon.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.sectionText}>This Month You have Spent</Text>
                    <Text style={styles.sectionText}>$6503.2 On</Text>
                    <Text style={styles.highlightText}>clothes Shopping</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title = 'See detail' />
                </View>
            </ImageBackground>
            <ImageBackground style={styles.savingGoal}
                source={require('../assets/Welcome/Joomla.jpg')}>
                <Image style={styles.shopLogo} source={require('../assets/Welcome/money.png')}/>
                <Text style={styles.goalHeader}>Saving Goal</Text>
                <View style={styles.goalSection}>
                    <View style={styles.goalContainer}>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>PlayStation 5</Text>
                        </View>
                        <View style={styles.goalBar}>
                            <ProcessBar/>
                        </View>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>100% achieved!</Text>
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>iphone X</Text>
                        </View>
                        <View style={styles.goalBar}>
                            <ProcessBar/>
                        </View>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>40% achieved</Text>
                        </View>
                    </View>  
                    <View style={styles.goalContainer}>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>AMG GTR</Text>
                        </View>
                        <View style={styles.goalBar}>
                            <ProcessBar/>
                        </View>
                        <View style={styles.goalTextSection}>
                            <Text style={styles.goalText}>5% achieved</Text>
                        </View>
                    </View>      
                </View>
            </ImageBackground>
            <View style={styles.creditCard}>
                <TouchableOpacity style={styles.creditCardSection} onPress={() => navigation.navigate("Saving2")}>
                    <ImageBackground style={styles.imageBackground} imageStyle={{ borderRadius: 12}}
                    source={require('../assets/Welcome/Royal.jpg')}>
                        <View style={styles.bankLogoSection}>
                            <Image style={styles.bankLogo} source={require('../assets/Welcome/commonwealth.png')}/>
                        </View>
                        <View style={styles.bankDetail}>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Available Funds:
                                </Text>
                                <Text style={styles.creditValue}>
                                    $64,000
                                </Text>
                            </View>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Current Balance: 
                                </Text>
                                <Text style={styles.creditValue}>
                                    $73,653
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.creditCardSection}>
                    <ImageBackground style={styles.imageBackground}
                    imageStyle={{ borderRadius: 12}}
                    source={require('../assets/Welcome/Royal.jpg')}>
                        <View style={styles.bankLogoSection}>
                            <Image style={styles.bankLogo} source={require('../assets/Welcome/alipay.png')}/>
                        </View>
                        <View style={styles.bankDetail}>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Available Funds:
                                </Text>
                                <Text style={styles.creditValue}>
                                    $64,000
                                </Text>
                            </View>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Current Balance: 
                                </Text>
                                <Text style={styles.creditValue}>
                                    $73,653
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.creditCardSection}>
                    <ImageBackground style={styles.imageBackground}
                    imageStyle={{ borderRadius: 12}}
                    source={require('../assets/Welcome/Royal.jpg')}>
                        <View style={styles.bankLogoSection}>
                            <Image style={styles.bankLogo} source={require('../assets/Welcome/citibank.png')}/>
                        </View>
                        <View style={styles.bankDetail}>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Available Funds:
                                </Text>
                                <Text style={styles.creditValue}>
                                    $64,000
                                </Text>
                            </View>
                            <View style={styles.bankDetailText}>
                                <Text style={styles.creditText}>
                                    Current Balance: 
                                </Text>
                                <Text style={styles.creditValue}>
                                    $73,653
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#ecf0f1',
        },
        usage: {
            flex:3,
            justifyContent:'center',
            alignItems:'center',
        },
        savingGoal: {
            flex:3,
            justifyContent:'center',
            alignItems:'center',
        },
        creditCard: {
            flex:3,
            flexDirection:'column',
        },
        creditCardSection: {
            flex:1,
            borderRadius: 12,
            margin: 8,
            marginHorizontal: 30,
            flexDirection: 'row',
        },
        imageBackground: {
            flex:1,
            flexDirection: 'row',
        },
        bankLogoSection: {
            flex: 1,
            justifyContent:'center',
        },
        bankLogo: {
            width: 50,
            height: 50,
            marginLeft:10,
        },
        bankDetail: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
        },
        bankDetailText: {
            flexDirection:'row',
        },
        creditText: {
            color: colors.white,
            fontFamily: "Roboto",
            fontSize: 12,
            paddingBottom: 5,
        },
        creditValue: {
            color: colors.white,
            fontFamily: "Inter_900Black",
            fontSize: 12,
            fontWeight: '600',
            marginLeft:5,
        }, 
        navigation: {
            flex:1,
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center',
        },
        shopLogo: {
            position: 'absolute',
            top: 20,
            width: 70,
            height: 70,
        },
        textContainer: {
            position:'relative',
            paddingTop: 50,
            alignItems:'center',
        },
        sectionText: {
            color: colors.white,
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
            fontWeight: '600',
            textTransform: "capitalize",
            paddingTop: 15,  
        },
        highlightText: {
            color: colors.white,
            fontFamily: "Inter_900Black",
            fontSize: 18,
            fontWeight: '600',
            textTransform: "capitalize",
        },
        buttonContainer: {
            position: 'absolute',
            bottom: 5,
        },
        goalContainer: {
            flexDirection:"row",
            flex:1,
        },
        goalBar: {
            flex: 2,
            backgroundColor: colors.white,
            margin: 2,
            borderRadius: 25,
        },
        goalText: {
            color: colors.white,
            fontFamily: "Allerta_400Regular",
            fontSize: 12,
            fontWeight: '600',
            textTransform: "capitalize",
        },
        goalTextSection: {
            flex: 1.5,
            alignItems:'center',
            justifyContent:'center',
        },
        goalSection: {
            position: 'absolute',
            bottom: 0,
            flexDirection: 'column',
            height: 90,
            width: 400,
            margin:2,
        },
        icon: {
            
        },
    });
export default SavingOne;