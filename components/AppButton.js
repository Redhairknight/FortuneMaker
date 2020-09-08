/**
author: Chang Liu 
*/ 
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = (props) => {
    return (   
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
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
})