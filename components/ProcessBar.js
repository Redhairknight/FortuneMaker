/**
author: Chang Liu 
*/ 
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../config/colors';

const ProcessBar = (props) => {
    return (   
        <View style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

export default ProcessBar;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#008B8B',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '75%',
        height: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})