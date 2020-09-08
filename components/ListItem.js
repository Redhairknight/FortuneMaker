import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

// native import
import colors from '../config/colors';

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.containter}>
            <Image style={styles.image}source={image}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containter: {
        flexDirection:'row'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    subTitle: {
        color: colors.medium,
    }
})

export default ListItem;