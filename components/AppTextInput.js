// inspired by Mosh Tutorial
// https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

// import component
import colors from '../config/colors';

function AppTextInput({ icon, ...textProps }) {
    return (
      <View style={styles.container}>
        {/* all icons are retrieved from: https://materialdesignicons.com/ */}
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={styles.textInput} {...textProps} />
      </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
    },
})