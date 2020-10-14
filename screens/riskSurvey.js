import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../config/validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'This survey is designed to address your risk tolerance, please fill it honestly.'
    },

    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your personal or family financail condition?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Have signifiant outstanding liabilities',
                value: 'dog'
            },
            {
                optionText: 'Incomes just offest the spendings',
                value: 'cat'
            },
            {
                optionText: 'Have some deposits or savings',
                value: 'ferret'
            },
            {
                optionText: 'Relatively diversified investments and reasonable savings',
                value: 'snake'
            },
            {
                optionText: 'Diversived investments and significant savings',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Based on your current financial condition, what percentage of assets you want to or already invest?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: '80 ~ 100%',
                value: 'dog'
            },
            {
                optionText: '50 ~ 80%',
                value: 'cat'
            },
            {
                optionText: '20 ~ 50%',
                value: 'ferret'
            },
            {
                optionText: '10 ~ 20%',
                value: 'snake'
            },
            {
                optionText: '0 ~ 10%',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your annual income?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Below $60,000',
                value: 'dog'
            },
            {
                optionText: 'Between $60,000 ~ $120,000',
                value: 'cat'
            },
            {
                optionText: 'Between $120,000 ~ $240,000',
                value: 'ferret'
            },
            {
                optionText: 'Between $240,000 ~ $480,000',
                value: 'snake'
            },
            {
                optionText: 'More than $480,000',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your planned investment horizen?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Less than 1 year',
                value: 'dog'
            },
            {
                optionText: 'Between 1 ~ 2 years',
                value: 'cat'
            },
            {
                optionText: 'Between 2 ~ 3 years',
                value: 'ferret'
            },
            {
                optionText: 'Between 3 ~ 5 years',
                value: 'snake'
            },
            {
                optionText: 'Beyond 5 years',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Do you have any previous invetment experience, what is the period of this investment?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'I do not have',
                value: 'dog'
            },
            {
                optionText: 'Yes, less than 1 year',
                value: 'cat'
            },
            {
                optionText: 'Yes, Between 1 ~ 3 years',
                value: 'ferret'
            },
            {
                optionText: 'Yes, Between 3 ~ 5 years',
                value: 'snake'
            },
            {
                optionText: 'Yes, Beyond 5 years',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is the purpose of your investment?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'For maintaining daily spendings',
                value: 'dog'
            },
            {
                optionText: 'Saving for later retirement',
                value: 'cat'
            },
            {
                optionText: "Children's education",
                value: 'ferret'
            },
            {
                optionText: 'Capital appreciation',
                value: 'snake'
            },
            {
                optionText: 'Significant increase in wealth',
                value: 'guinea'
            }
        ]
    },   
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your expected annual return?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Same as deposit rate',
                value: 'dog'
            },
            {
                optionText: 'Same as the inflation rate',
                value: 'cat'
            },
            {
                optionText: "Greater than the inflation, with a little capital appreciation",
                value: 'ferret'
            },
            {
                optionText: 'Close to the stock market return',
                value: 'snake'
            },
            {
                optionText: 'Significantly above the stock market return',
                value: 'guinea'
            }
        ]
    },       
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your ideal investment style?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Only 5% return, but risk free',
                value: 'dog'
            },
            {
                optionText: '15% return, but has chance to lose 5%',
                value: 'cat'
            },
            {
                optionText: "30% return, but has chance to lose 15%",
                value: 'ferret'
            },
            {
                optionText: '50% return, but has chance to lose 30%',
                value: 'snake'
            },
            {
                optionText: '100% return, but has chance to lose 60%',
                value: 'guinea'
            }
        ]
    },    
    {
        questionType: 'SelectionGroup',
        questionText:
            'If your current stock position is in 30% loss, what would you do?',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Can not bear the loss, close the position',
                value: 'dog'
            },
            {
                optionText: 'Hold, if the duration is between 3 ~ 6 months',
                value: 'cat'
            },
            {
                optionText: "Hold, if the duration is less than 1 year",
                value: 'ferret'
            },
            {
                optionText: 'Hold, if the duration is between 2 ~ 3 years',
                value: 'snake'
            },
            {
                optionText: 'Does not matter, I can hold it for a long time',
                value: 'guinea'
            }
        ]
    },    
    {
        questionType: 'SelectionGroup',
        questionText:
            'What type of investor you are in the view of people around you',
        questionId: 'favoritePet',
        options: [
            {   
                optionText: 'Can not bear any risk',
                value: 'dog'
            },
            {
                optionText: 'Risk aversion but can take a little risks',
                value: 'cat'
            },
            {
                optionText: "Willing to take risks, after a rational analysis",
                value: 'ferret'
            },
            {
                optionText: 'Risk seeking, relatively aggressive',
                value: 'snake'
            },
            {
                optionText: 'Risk seeking, very aggressive',
                value: 'guinea'
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
                backgroundColor: GREEN,
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
        this.state = { backgroundColor: PURPLE, answersSoFar: '' };
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
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
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
                    color={GREEN}
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
                    color={isSelected ? GREEN : PURPLE}
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

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
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