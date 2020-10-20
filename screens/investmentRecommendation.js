import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ColorPropType,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  ImageBackground,
  Modal,
} from "react-native";
import * as firebase from 'firebase'
import retrieveDatabse from "../components/DatabaseManager"
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Recommendation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          score: retrieveDatabse("/investment/riskSurvey/" + (firebase.auth().currentUser.uid) + "/score"),
          modalOpen: false,
        }
      }
    
      
    checkInvestorType = (score) => {
        var type = ''
        if (score < 20) {
            type = 'Conservative'
        } else if (20 <= score && score<40) {
            type = 'Moderately Conservative'
        } else if (40 <= score && score< 60) {
            type = 'Moderate'
        } else if (60 <= score && score< 80) {
            type = 'Moderately Aggressive'
        } else {
            type = 'Aggressive'
        }
        return type;
    };

    takeRiskSurvy = () => {
        this.props.navigation.pop()
        this.props.navigation.navigate('RiskSurvyDetail')
    }

    render() {
        var riskType = this.checkInvestorType(this.state.score)
        return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
            <ScrollView>
                <Modal visible={this.state.modalOpen} animationType='slide'>
                    <TouchableOpacity style={styles.modalCloseButton} onPress={() => this.setState({modalOpen: false})}>
                        <MaterialCommunityIcons
                            name='close'
                            size={36}
                            color='white'
                        />
                    </TouchableOpacity>
                    <Text>
                        Modal
                    </Text>
                   
                </Modal>
                <View style={styles.top}>
                    <View style={styles.topText} >
                        <Text style={styles.descriptionText}>Your risk type is:</Text>
                        <Text style={styles.riskType}>{riskType}</Text>
                    </View>
                    <Image style={styles.topImg} source={require("../assets/recommendation_background.png")}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleRemind}>
                    We recommend you follow your risk type
                    when making an investment decision
                    </Text>
                    <View style={styles.bulbIcon}>
                        <MaterialCommunityIcons name="lightbulb-on" size={36} color="#1F4E79"/>
                        <TouchableWithoutFeedback onPress={() =>this.setState({modalOpen: true})}>
                            <Text style={styles.bulbIconText} >Your Recommendation</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View> 
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.retake} onPress={this.takeRiskSurvy}>
                        <Text style={styles.buttonText}>
                            Retake a survey
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <View style={{borderBottomColor: "gray", borderBottomWidth: 3, width: 350, 
                        paddingBottom: 5, alignItems: "center", alignSelf: "center", }}>
                            <Text style={styles.notice}>
                                Notice
                            </Text>
                        </View>
                        <View style={styles.noticeContentBox}>
                            <Text style={styles.noticeContent}>
                                a. The survey results are in 5 categories, you should based on your result
                                to make investment decision.
                            </Text>
                            <Text style={styles.noticeContent}>
                                b. The validity for this risk survey result is 2 years.
                            </Text>
                            <Text style={styles.noticeContent}>
                                c. If your financial conditions, and personal information have changed. Please
                                retake the risk survey.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    topImg: {
        maxHeight: 100,
        maxWidth: 150,
        alignSelf: "center",
        marginLeft: 0,
    },
    top: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        paddingBottom: 20,
        borderBottomWidth: 0.6,
        borderBottomColor: "gray",
    },
    descriptionText: {
        marginHorizontal: 10,
        marginVertical: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    riskType: {
        width: 200,
        marginLeft: 30,
        marginTop: 15,
        fontSize: 25,
        fontWeight: "bold",
        color: "#1F4E79",
    },
    middle: {
        height: 150,
        alignItems: "center",
    },
    middleRemind: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 12,
        color: "gray",
    },
    bulbIcon: {
        alignSelf: "flex-start",
        marginHorizontal: 20,
        marginVertical: 15,    
        display: 'flex',
        flexDirection: "row",    
    },
    bulbIconText: {
        fontSize: 20,
        fontWeight: '900',
        color: "#F8A500",
        marginLeft: 10,
        alignSelf: "center",
    },
    bottom: {
        alignItems: "center",
    },
    retake: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#1F4E79",
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1F4E79',
    },
    notice: {
        color: "gray",
        fontSize: 20,
        fontWeight: "bold",
    },
    noticeContentBox: {
        margin: 20,
    },
    noticeContent: {
        color: "gray",
        marginVertical: 10,
        fontSize: 16,
    },
    modalCloseButton: {
        alignSelf: "center",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#1F4E79",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#1F4E79",
    }
})

export default Recommendation;