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
import { VictoryPie, VictoryLegend, } from 'victory-native'

class Recommendation extends React.Component {
    // image source: https://newnetservices.net
    constructor(props) {
        /** connect to firebase and retrive data first */

        super(props);
        this.state = {
            score: retrieveDatabse("/investment/riskSurvey/" + (firebase.auth().currentUser.uid) + "/score"),
            modalOpen: false,
            description: "",
            assetAllocation: null,
        }
    }


    checkInvestorType = (score) => {
        /** return risk type of investor based on risk survey score */

        var type = ''
        if (score <= 30) {
            type = 'Conservative'
        } else if (31 <= score && score <= 45) {
            type = 'Moderately Conservative'
        } else if (46 <= score && score <= 65) {
            type = 'Moderate'
        } else if (66 <= score && score <= 80) {
            type = 'Moderately Aggressive'
        } else {
            type = 'Aggressive'
        }
        return type;
    };

    takeRiskSurvy = () => {
        /** switch the screen to retake the risk survey */

        this.props.navigation.pop()
        this.props.navigation.navigate('RiskSurvyDetail')
    }

    setModalText = (riskType) => {
        /** the modals that will display based on users' risk type */

        if (riskType == 'Conservative') {
            this.setState({ description: "For investors who seek current income and stability and are less concerned about growth" })
            this.setState({
                assetAllocation: [
                    { x: 1, y: 10, label: "10% typeA" },
                    { x: 2, y: 5, label: "5% typeB" },
                    { x: 3, y: 5, label: "5% typeC" },
                    { x: 3, y: 50, label: "50% typeD" },
                    { x: 3, y: 30, label: "30% typeE" },
                ]
            })
        } else if (riskType == 'Moderately Conservative') {
            this.setState({ description: "For investors who seek current income and stability, with modest potential for increase in the value of their investments" })
            this.setState({
                assetAllocation: [
                    { x: 1, y: 25, label: "25%" },
                    { x: 2, y: 5, label: "5%" },
                    { x: 3, y: 10, label: "10%" },
                    { x: 3, y: 50, label: "50%" },
                    { x: 3, y: 10, label: "10%" },
                ]
            })
        } else if (riskType == 'Moderate') {
            this.setState({ description: "For long-term investors who don’t need current income and want some growth potential. Likely to entail some fluctuations in value, but presents less volatility than the overall equity market." })
            this.setState({
                assetAllocation: [
                    { x: 1, y: 35, label: "35%" },
                    { x: 2, y: 10, label: "10%" },
                    { x: 3, y: 15, label: "15%" },
                    { x: 3, y: 35, label: "35%" },
                    { x: 3, y: 5, label: "5%" },
                ]
            })
        } else if (riskType == 'Moderately Aggressive') {
            this.setState({ description: "For long-term investors who want good growth potential and don’t need current income. Entails a fair amount of volatility, but not as much as a portfolio invested exclusively in equities." })
            this.setState({
                assetAllocation: [
                    { x: 1, y: 45, label: "45%" },
                    { x: 2, y: 15, label: "15%" },
                    { x: 3, y: 20, label: "20%" },
                    { x: 3, y: 15, label: "15%" },
                    { x: 3, y: 5, label: "5%" },
                ]
            })
        } else {
            this.setState({ description: "For long-term investors who want high growth potential and don’t need current income. May entail substantial year-to-year volatility in value in exchange for potentially high long-term returns." })
            this.setState({
                assetAllocation: [
                    { x: 1, y: 50, label: "50%" },
                    { x: 2, y: 20, label: "20%" },
                    { x: 3, y: 20, label: "20%" },
                    { x: 3, y: 5, label: "5%" },
                    { x: 3, y: 5, label: "5%" },
                ]
            })
        }
    }

    render() {
        var riskType = this.checkInvestorType(this.state.score)

        const colorScale = ['#1F7954', 'gray', 'orange', '#1F4E79', '#79491F'];
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "white", }}>
                <ScrollView>
                    <Modal visible={this.state.modalOpen} animationType='slide'>
                        <ScrollView>
                            <TouchableOpacity style={styles.modalCloseButton} onPress={() => this.setState({ modalOpen: false })}>
                                <MaterialCommunityIcons
                                    name='close'
                                    size={36}
                                    color='white'
                                />
                            </TouchableOpacity>
                            <View >
                                <View style={styles.modalTopRiskType}>
                                    <Text style={styles.modalRiskType}>{riskType}</Text>
                                </View>
                                <View style={styles.modalTopDescription}>
                                    <Text style={styles.modalDescription}>
                                        {this.state.description}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.modalPie}>
                                <VictoryPie
                                    colorScale={colorScale}
                                    data={this.state.assetAllocation}
                                    height={350}
                                    width={350}
                                    innerRadius={70}
                                    padAngle={2}
                                />
                                <VictoryLegend
                                    padding={{ top: 0, left: 0 }}
                                    title="Asset classes"
                                    orientation="vertical"

                                    data={[
                                        {
                                            name: 'Large-Cap Equity (typeA)',
                                            symbol: { fill: 'green', type: 'square' },
                                        },
                                        {
                                            name: 'Small-Cap Equity (typeB)',
                                            symbol: { fill: 'gray', type: 'square' },
                                        },
                                        {
                                            name: 'International Equity (typeC)',
                                            symbol: { fill: 'gold', type: 'square' },
                                        },
                                        {
                                            name: 'Fixed Income (typeD)',
                                            symbol: { fill: 'navy', type: 'square' },
                                        },
                                        {
                                            name: 'Cash Investments (typeE)',
                                            symbol: { fill: 'brown', type: 'square' },
                                        }
                                    ]}
                                    width={(250)}
                                />
                            </View>
                        </ScrollView>
                    </Modal>
                    <View style={styles.top}>
                        <View style={styles.topText} >
                            <Text style={styles.descriptionText}>Your risk type is:</Text>
                            <Text style={styles.riskType}>{riskType}</Text>
                        </View>
                        <Image style={styles.topImg} source={require("../assets/recommendation_background.png")} />
                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.middleRemind}>
                            We recommend you follow your risk type
                            when making an investment decision
                    </Text>
                        <View style={styles.bulbIcon}>
                            <MaterialCommunityIcons name="lightbulb-on" size={36} color="#1F4E79" />
                            <TouchableWithoutFeedback onPress={() => { this.setState({ modalOpen: true }); this.setModalText(riskType) }}>
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
                            <View style={{
                                borderBottomColor: "gray", borderBottomWidth: 3, width: 350,
                                paddingBottom: 5, alignItems: "center", alignSelf: "center",
                            }}>
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
    },
    modalRiskType: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "#1F4E79",
    },
    modalTopRiskType: {
        width: 350,
        paddingVertical: 20,
        borderBottomWidth: 1,
        alignSelf: "center",
        borderColor: "#1F4E79"
    },
    modalTopDescription: {
        width: 300,
        alignSelf: "center",
    },
    modalDescription: {
        fontSize: 20,
        color: "gray",
        marginTop: 20,
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 0.5,
        padding: 10,
        margin: 10,
    },
    modalPie: {
        alignItems: "center",
        width: '100%',
    }
})

export default Recommendation;
