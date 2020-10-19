import React, { useState, useCallback, useRef } from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, } from "react-native";
import * as firebase from 'firebase'
import { getDailyChart } from '../components/stockApi'

class Recommendation extends React.Component {

    componentDidMount() {
        const fetchStockData = async () => {
            const result = await getDailyChart('TSLA');
        }
        fetchStockData()
    }

    render() {
       
        return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
            <ScrollView>
                <View>
                    <Text style={styles.questionText}>The results are here!</Text>
                    <Text style={styles.questionText}>Your total score: </Text>
                    <Text style={styles.questionText}>Your are classified as a: </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}
import { Form } from "native-base";

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        alignSelf: "center",
    }
})

export default Recommendation;