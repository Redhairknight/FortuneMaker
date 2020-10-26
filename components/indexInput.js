import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import colors from '../config/colors';

function AppTextInput({ icon, ...textProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={36} color={colors.medium} style={styles.icon}/>}
            <TextInput style={styles.textInput}{...textProps}/>
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '80%',
        padding: 5,
        marginVertical: 5
    },
    textInput: {
        fontSize: 15,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
    },
})