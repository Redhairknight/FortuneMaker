import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
// native import
import colors from '../config/colors';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.containter}>
                    <Image style={styles.image}source={image}/>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    containter: {
        flexDirection:'row',
        padding: 15,
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