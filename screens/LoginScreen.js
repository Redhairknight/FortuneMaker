import React from 'react';
import { StyleSheet, Image, View, Button, Text, TouchableOpacity } from 'react-native';
// import firebase
import * as firebase from 'firebase'

// local import
import AppTextInput from '../components/AppTextInput';

export default class LoginScreen extends React.Component {
    // set state to initial email and password
    state = {
        email: "",
        password: "",
        errorMessage: null,
    };

    // check if user is successfully logged in
    checkLogin = () => {
        firebase.auth().onAuthStateChanged(user =>{
            if (user) {
                this.props.navigation.navigate("Loading")
            } else {
                // No user is signed in.
                this.props.navigation.navigate("Login")
            }
        });
    }

    // check if the user exists in the firebase database
    handleLogin = () => {
        const {email, password} = this.state
        
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))
            .then(this.props.navigation.navigate("Loading"))
    }

    render() {
        return (
            <View>
            <Image
                style={styles.logo} 
                // https://www.flaticon.com/free-icon/money_2933116?term=coin&page=1&position=7
                source={require('../assets/Welcome/logo.png')} />
            {/* error message */}
            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text> }
            </View>
            <AppTextInput 
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
                value = {this.state.email}
                autoCorrect={false}
                autoCapitalize= 'none'
                icon = 'email'
                placeholder="Email"
                textContentType="emailAddress"
                />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon='lock'
                onChangeText={password => this.setState({ password })}
                value = {this.state.password}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                />
            
            <Button title="Login" onPress={this.handleLogin} />

            <TouchableOpacity style={{alignSelf: 'center', marginTop: 32}}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{color: '#414959', fontSize: 12}}>
                    New to FortuneMaker? <Text style={{fontWeight: '500', color: '#E9446A'}}>Sign in </Text>
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    errorMessage: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center'
    }
})