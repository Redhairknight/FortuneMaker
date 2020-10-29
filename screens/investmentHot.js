import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from "react-native";
import { Assets } from "react-navigation-stack";
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'

export default class App extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View >
                        <View>

                        </View>
                        <ImageBackground style={styles.imgBackground} source={require("../assets/no1.jpg")} imageStyle={styles.imageStyle}
                        >
                            <View style={styles.productContainer}>

                                <Text style={styles.productName}>ESG USA leaders ETF</Text>

                            </View>
                        </ImageBackground>

                        <ImageBackground style={styles.imgBackground} source={require("../assets/no2.jpg")} imageStyle={styles.imageStyle}
                        >
                            <View style={styles.productContainer}>

                                <Text style={styles.productName}>CurrencyShare</Text>

                            </View>
                        </ImageBackground>
                        <ImageBackground style={styles.imgBackground} source={require("../assets/no3.jpg")} imageStyle={styles.imageStyle}
                        >
                            <View style={styles.productContainer}>

                                <Text style={styles.productName}>Cap-etf</Text>

                            </View>
                        </ImageBackground>
                    </View>

                </View>
            </ScrollView >
        );
    }
}

const styles = {
    container: { flex: 1, alignItems: "center" },
    imgBackground: {
        width: 300,
        height: 100,
        flex: 1,
        margin: 10,
    },
    imageStyle: {
        borderRadius: 20
    },
    productContainer: {
        width: 180,
        height: 100,
        padding: 10,
        position: 'absolute', right: 0
    },
    productName: { fontSize: 25 }
};
