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
    
    switchScreen = () => {
        this.props.navigation.pop(2)
        this.props.navigation.navigate("InvestmentRecommendation")
    }

    checkInvestorType = (score) => {
        var type = ''
        if (score <= 30) {
            type = 'Conservative'
        } else if (31 <= score && score<= 45) {
            type = 'Moderately Conservative'
        } else if (46 <= score && score<= 65) {
            type = 'Moderate'
        } else if (66 <= score && score<= 80) {
            type = 'Moderately Aggressive'
        } else {
            type = 'Aggressive'
        }
        return type;
    };

    render() {
        const score = this.props.navigation.getParam('score');
        this.writeUserData(score);
        var riskType = this.checkInvestorType(score)
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.questionText}>The results are here!</Text>
                        <Text style={styles.questionText}>Your total score: {score}</Text>
                        <Text style={styles.questionText}>Your are classified as:</Text>
                        <Text style={styles.riskResult}>{riskType}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Button color={BLUE} title="Investment Recommendation" onPress={this.switchScreen} />
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
        borderRadius: 20,
        maxHeight: '40%',
    },
    questionText: {
        justifyContent: 'center',
        fontSize: 20,
        margin: 5,
        color: BLUE,
        alignSelf: 'center',
    },
    riskResult: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20,
        margin: 5,
        alignSelf: 'center',
    },
    button: {
        marginVertical: 10,
        maxWidth: '70%',
        alignContent: "center",
        alignSelf: "center",
    }
});