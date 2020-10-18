import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Card from '../components/Card';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
// use for sign out
import { NavigationActions } from "react-navigation";

class SavingTwo extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.Signout = this.Signout
    // }
    //use for sign out
    Signout() {
        const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'HelloScreen'})
        ] })
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <View>
            <Image style={styles.image} source={require('../assets/Welcome/playStation.png')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>PlayStation 5 (Pre-order)</Text>
                <Text onPress={() => this.props.navigation.navigate('Saving3')} style={styles.price}>500$</Text>
                <View style={styles.userContainer}>

                </View>
                <ListItem 
                    image={require('../assets/Welcome/commonwealth.png')}
                    title="CommonWealth"
                    subTitle='5 transactions this month'
                    />
            </View>
        </View>
        )
    }
}

// function SavingTwo({navigation}) {
//     return(
//         <View>
//             <Image style={styles.image} source={require('../assets/Welcome/playStation.png')} />
//             <View style={styles.detailsContainer}>
//                 <Text onPress={() => Signout()} style={styles.title}>PlayStation 5 (Pre-order)</Text>
//                 <Text onPress={() => navigation.navigate('Saving3')} style={styles.price}>500$</Text>
//                 <View style={styles.userContainer}>

//                 </View>
//                 <ListItem 
//                     image={require('../assets/Welcome/commonwealth.png')}
//                     title="CommonWealth"
//                     subTitle='5 transactions this month'
//                     />
//             </View>
//         </View>
//     ); 
// }

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },  
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 10,
    }
})

export default SavingTwo;