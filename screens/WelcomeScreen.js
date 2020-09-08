import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Modal, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import AppText from '../components/AppText/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/Welcome/Royal.jpg')}
        >   
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Welcome/logo.png')}/>
                <AppText style={styles.logoText}>Fortune Finder</AppText>
            </View>
            <View style={styles.loginButton}>
                
                {/* <Modal visible={false}>
                    <View style={StyleSheet.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        <Text>Hello :D</Text>
                    </View>
                </Modal> */}

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Please enter your username and password</Text>

                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <Text style={styles.textStyle}>close</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>

                <Text onPress={() => setModalVisible(true)} style={styles.buttonText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text onPress={() => navigation.navigate("MainScreen")} style={styles.buttonText}>Register</Text>
            </View>
        </ImageBackground>  
    );
}

// font style
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        position: "absolute",
        bottom: 60,
        width: '70%',
        height: 70,
        backgroundColor: "#fc5c65",
        borderRadius: 10,
        alignItems: "center",
        elevation: 10
    },
    registerButton: {
        position: "absolute",
        bottom: 140,
        width: '70%',
        height: 70,
        backgroundColor: "#4ecdc4",
        borderRadius: 10,
        alignItems: "center",
        elevation: 10
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        textTransform: "capitalize",
    },
    logoText: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        textTransform: "capitalize",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})

export default WelcomeScreen;