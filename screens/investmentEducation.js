import React, { useState, useCallback, useRef } from "react";
import {
    Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
    SafeAreaView, TouchableWithoutFeedback,
} from "react-native";
import { render } from "react-dom";
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

class InvestmentEducation extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "white", }}>
                <ScrollView>
                    <View>
                        <YoutubePlayer height={250} videoId={"yRr0_gJ-3mI"} />
                        <YoutubePlayer height={250} videoId={"covxjhXsCi8"} />
                        <YoutubePlayer height={250} videoId={"a5__xBUrDO0"} />
                        <YoutubePlayer height={250} videoId={"uEeCJ4-qF5c"} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    courese_list: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    courese_list_view: {
        paddingTop: 5,
        paddingLeft: 10,
        borderColor: "gray",
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        paddingBottom: 10,
    }
})

export default InvestmentEducation;