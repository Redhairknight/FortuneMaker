import React, { useState } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

function RegisterScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View>
            <Image
                style={styles.logo} 
                source={require('../assets/Welcome/logo.png')} />
            <AppTextInput 
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
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
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                />
            {/* <Button title="Register" onPress={()=>console.log(email, password) && navigation.navigate("Welcome")} /> */}
            <Button title="Register" onPress={() => navigation.navigate("WelcomeScreen")} />
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})