import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MaterialCommunityIcon} from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcon
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </View>
    );
}       

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70
    }
})

export default ListItemDeleteAction;