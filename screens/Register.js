import React from 'react';
import { StyleSheet, Image, View, Button, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import firebase
import * as firebase from 'firebase'

// local import
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
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
                source={require('../assets/splash.png')} />
            {/* error message */}
            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text> }
            </View>
            <AppTextInput 
                onChangeText={name => this.setState({ name })}
                value = {this.state.name}
                autoCorrect={false}
                autoCapitalize= 'none'
                icon = 'email'
                placeholder="Name"
                textContentType="emailAddress"
                />
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
            {/* <Button title="Register" onPress={()=>console.log(email, password) && navigation.navigate("Welcome")} /> */}
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