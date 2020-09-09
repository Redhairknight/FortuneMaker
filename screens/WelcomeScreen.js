import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Modal, TouchableHighlight, TextInput, Button, Alert } from 'react-native';
import {MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import AppText from '../components/AppText/AppText';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <AntDesign name="close" size={24} color="black" style={styles.closeTag} onPress={() => {
                    setModalVisible(!modalVisible);}}/>
                <AppTextInput 
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    autoCorrect={false}
                    autoCapitalize= 'none'
                    icon = 'email'
                    placeholder="Email"
                    textContentType="emailAddress"
                    />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='lock'
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    />
                <Button title="Login" onPress={()=>navigation.navigate("MainScreen") && setModalVisible(!modalVisible)} />

            </View>
            </View>
        </Modal>

                <Text onPress={() => setModalVisible(true)} style={styles.buttonText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text onPress={() => navigation.navigate("RegisterScreen")} style={styles.buttonText}>Register</Text>
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
        elevation: 5,
        marginTop: 150,
    },
    closeTag: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
})

export default WelcomeScreen;