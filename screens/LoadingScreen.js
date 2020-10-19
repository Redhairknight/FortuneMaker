import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// Import firebase here
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            setTimeout(() => {
                if (user) {
                    this.props.navigation.navigate("App")
                } else {
                    this.props.navigation.navigate("Login")
                }
            }, 1000);
        })
    };

    render() {
        return (
            <View style={styles.container}> 
                <Text>Loading...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});