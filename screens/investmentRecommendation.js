import React, { useEffect } from "react";
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
} from "react-native";
import * as firebase from 'firebase'
import retrieveDatabse from "../components/DatabaseManager"


class Recommendation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          score: retrieveDatabse("/investment/riskSurvey/" + (firebase.auth().currentUser.uid) + "/score"),
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

    render() {
        var riskType = this.checkInvestorType(this.state.score)
        return (
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
           
                <View style={styles.top}>
                    <Text style={styles.descriptionText}>Your risk type is:</Text>
                    <Text style={styles.riskType}>{riskType}</Text>
                </View> 
            </ScrollView>
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    top: {
        maxHeight: '20%',
    }

})

export default Recommendation;