import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Modal, TouchableHighlight, TextInput, Button, Alert } from 'react-native';

// import local component
import colors from '../config/colors';

function HelloScreen({ navigation }) {

    return (
        <ImageBackground
            style={styles.background}
            // image source: https://uigradients.com/#Royal
            source={require('../assets/Welcome/Royal.jpg')}
        >
            <View style={styles.logoContainer}>
                {/* image source: https://www.flaticon.com/free-icon/money_2933116?term=coin&page=1&position=7 */}
                <Image style={styles.logo} source={require('../assets/Welcome/logo.png')} />
                <Text style={styles.logoText}>Fortune Maker</Text>
            </View>
            <View style={styles.loginButton}>
                <Text onPress={() => navigation.navigate("Login")} style={styles.buttonText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text onPress={() => navigation.navigate("Register")} style={styles.buttonText}>Register</Text>
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
        marginTop: 20,
        color: colors.white,
        fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        textTransform: "capitalize",
    },
})

export default HelloScreen;