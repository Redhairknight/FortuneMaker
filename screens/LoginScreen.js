import React from 'react';
import { StyleSheet, Image, View, Button, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import firebase
import * as firebase from 'firebase'

// local import
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

export default class LoginScreen extends React.Component {

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
                <Text style={{color: '#414959', fontSize: 13}}>
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
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    }
})