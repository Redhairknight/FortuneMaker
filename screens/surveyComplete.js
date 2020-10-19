import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

const BLUE = '#1F4E79';
const GRAY = '#BEBEBE';

export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    writeUserData = (score) => {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('investment/riskSurvey/' + userId).set({
          score: score
        });
      }
    
    handleLogin = () => {
        this.props.navigation.pop(2)
        this.props.navigation.navigate("InvestmentRecommendation")
    }

    render() {
        const score = this.props.navigation.getParam('score');
        this.writeUserData(score);
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>The results are here!</Text>
                        <Text style={styles.questionText}>Your total score: {score}</Text>
                        <Text style={styles.questionText}>Your are classified as a: {score}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Button color='#1F4E79' title="Investment Recommendation" onPress={this.handleLogin} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GRAY,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        maxHeight: '50%',
    },
    questionText: {
        justifyContent: 'center',
        marginBottom: 20,
        fontSize: 20,
        margin: 10,
    },
    button: {
        marginVertical: 20,
        maxWidth: '70%',
        alignContent: "center",
        alignSelf: "center",
    }
});