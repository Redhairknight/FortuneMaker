import React, { useState, useCallback, useRef } from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, } from "react-native";
import * as firebase from 'firebase'
class Favorite extends React.Component {
    
    render() {
       
        return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
            <ScrollView>
                <View>
                    <Text style={styles.text}>Favorite</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        alignSelf: "center",
    }
})

export default Favorite;