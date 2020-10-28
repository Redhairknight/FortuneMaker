import React from 'react';
import { StyleSheet, Image, View, Button, Text } from 'react-native';

// import firebase
import * as firebase from 'firebase'

// local import
import AppTextInput from '../components/AppTextInput';

export default class RegisterScreen extends React.Component {
    // set initial state of input text
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    // register user successfully or display error message
    handleSignUp = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    // image source: https://www.flaticon.com/free-icon/money_2933116?term=coin&page=1&position=7
                    source={require('../assets/Welcome/logo.png')} />
                {/* error message */}
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                {/* textinput field below */}
                <AppTextInput
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='account-circle'
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <AppTextInput
                    keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='email'
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='lock'
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                {/* button to trigger "signup" */}
                <Button title="Register" onPress={this.handleSignUp} />
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