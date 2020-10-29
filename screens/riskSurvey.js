import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../config/validColors';

const BLUE = '#1F4E79';
const GRAY = '#BEBEBE';

// set up the survey questionnaires
const survey = [
    {
        questionType: 'Info',
        questionText: 'This survey is designed to address your risk tolerance, please fill it honestly.'
    },

    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your personal or family financail condition?',
        questionId: 'q1',
        options: [
            {   
                optionText: 'Have signifiant outstanding liabilities',
                value: '2'
            },
            {
                optionText: 'Incomes just offest the spendings',
                value: '4'
            },
            {
                optionText: 'Have some deposits or savings',
                value: '6'
            },
            {
                optionText: 'Relatively diversified investments and reasonable savings',
                value: '8'
            },
            {
                optionText: 'Diversived investments and significant savings',
                value: '10'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Based on your current financial condition, what percentage of assets you want to or already invest?',
        questionId: 'q2',
        options: [
            {   
                optionText: '80 ~ 100%',
                value: '2'
            },
            {
                optionText: '50 ~ 80%',
                value: '4'
            },
            {
                optionText: '20 ~ 50%',
                value: '6'
            },
            {
                optionText: '10 ~ 20%',
                value: '8'
            },
            {
                optionText: '0 ~ 10%',
                value: '10'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your annual income?',
        questionId: 'q3',
        options: [
            {   
                optionText: 'Below $60,000',
                value: '2'
            },
            {
                optionText: 'Between $60,000 ~ $120,000',
                value: '4'
            },
            {
                optionText: 'Between $120,000 ~ $240,000',
                value: '6'
            },
            {
                optionText: 'Between $240,000 ~ $480,000',
                value: '8'
            },
            {
                optionText: 'More than $480,000',
                value: '10'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your planned investment horizen?',
        questionId: 'q4',
        options: [
            {   
                optionText: 'Less than 1 year',
                value: '2'
            },
            {
                optionText: 'Between 1 ~ 2 years',
                value: '4'
            },
            {
                optionText: 'Between 2 ~ 3 years',
                value: '6'
            },
            {
                optionText: 'Between 3 ~ 5 years',
                value: '8'
            },
            {
                optionText: 'Beyond 5 years',
                value: '10'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you have any previous invetment experience, what is the period of this investment?',
        questionId: 'q5',
        options: [
            {   
                optionText: 'I do not have',
                value: '2'
            },
            {
                optionText: 'Yes, less than 1 year',
                value: '4'
            },
            {
                optionText: 'Yes, Between 1 ~ 3 years',
                value: '6'
            },
            {
                optionText: 'Yes, Between 3 ~ 5 years',
                value: '8'
            },
            {
                optionText: 'Yes, Beyond 5 years',
                value: '10'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is the purpose of your investment?',
        questionId: 'q6',
        options: [
            {   
                optionText: 'For maintaining daily spendings',
                value: '2'
            },
            {
                optionText: 'Saving for later retirement',
                value: '4'
            },
            {
                optionText: "Children's education",
                value: '6'
            },
            {
                optionText: 'Capital appreciation',
                value: '8'
            },
            {
                optionText: 'Significant increase in wealth',
                value: '10'
            }
        ]
    },   
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your expected annual return?',
        questionId: 'q7',
        options: [
            {   
                optionText: 'Same as deposit rate',
                value: '2'
            },
            {
                optionText: 'Same as the inflation rate',
                value: '4'
            },
            {
                optionText: "Greater than the inflation, with a little capital appreciation",
                value: '6'
            },
            {
                optionText: 'Close to the stock market return',
                value: '8'
            },
            {
                optionText: 'Significantly above the stock market return',
                value: '10'
            }
        ]
    },       
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your ideal investment style?',
        questionId: 'q8',
        options: [
            {   
                optionText: 'Only 5% return, but risk free',
                value: '2'
            },
            {
                optionText: '15% return, but has chance to lose 5%',
                value: '4'
            },
            {
                optionText: "30% return, but has chance to lose 15%",
                value: '6'
            },
            {
                optionText: '50% return, but has chance to lose 30%',
                value: '8'
            },
            {
                optionText: '100% return, but has chance to lose 60%',
                value: '10'
            }
        ]
    },    
    {
        questionType: 'SelectionGroup',
        questionText:
            'If your current stock position is in 30% loss, what would you do?',
        questionId: 'q9',
        options: [
            {   
                optionText: 'Can not bear the loss, close the position',
                value: '2'
            },
            {
                optionText: 'Hold, if the duration is between 3 ~ 6 months',
                value: '4'
            },
            {
                optionText: "Hold, if the duration is less than 1 year",
                value: '6'
            },
            {
                optionText: 'Hold, if the duration is between 2 ~ 3 years',
                value: '8'
            },
            {
                optionText: 'Does not matter, I can hold it for a long time',
                value: '10'
            }
        ]
    },    
    {
        questionType: 'SelectionGroup',
        questionText:
            'What type of investor you are in the view of people around you',
        questionId: 'q10',
        options: [
            {   
                optionText: 'Can not bear any risk',
                value: '2'
            },
            {
                optionText: 'Risk aversion but can take a little risks',
                value: '4'
            },
            {
                optionText: "Willing to take risks, after a rational analysis",
                value: '6'
            },
            {
                optionText: 'Risk seeking, relatively aggressive',
                value: '8'
            },
            {
                optionText: 'Risk seeking, very aggressive',
                value: '10'
            }
        ]
    },   
    {
        questionType: 'Info',
        questionText: 'That is all for this survy, tap finish to see your results!'
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: BLUE,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Risk Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: GRAY, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        /** 
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         * 
         *  Answers are returned in an array, of the form 
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *  
         *  As an example
         *  { 
         *      questionId: "favoritePet", 
         *      value: { 
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a 
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */

        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        var totalScore = 0
        for (const elem of infoQuestionsRemoved) { 
            answersAsObj[elem.questionId] = elem.value; 
            totalScore += Number(elem.value['value']);
        }
        
        
        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj, score: totalScore});
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });

    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={BLUE}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={BLUE}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={BLUE}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={BLUE}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? BLUE : GRAY}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }


    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
                <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        textTransform: "none",
        elevation: 20,
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});