import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import {
  VictoryPie,
  VictoryLegend,
  VictoryBar,
  VictoryLabel,
  VictoryScatter,
} from "victory-native";
//import firebase
// <<<<<<< week10-Saving
import * as firebase from "firebase";

import colors from "../config/colors";
import { NavigationActions } from "react-navigation";
import { isLoading } from "expo-font";

export default class SavingPie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: [],
      isLoading: true,
      modalVisible: false,
    };
  }

  // capture the data before it loads
  // this method is inspired by "Beginner Programmers" on:
  // https://www.youtube.com/watch?v=1jIKovuhtAU&t=615s&ab_channel=BeginnerProgrammers
  componentDidMount() {
    var that = this;
    var userId = firebase.auth().currentUser.uid;
    let q = firebase.database().ref("Transaction/" + userId);
    var finished = [];

    q.once("value", (snapshot) => {
      snapshot.forEach(function (data) {
        let result = data.val();
        result["key"] = data.key;
        finished.push(result);
      });
    }).then(function () {
      that.setState({
        listingData: finished,
      });
    });
    //   .finally (() => {
    //       this.setState({ isLoading: false });
    //   })
  }

  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    // 1. initialize variable
    // 2. Assign the value retrieved from firebase into the empty array
    // 3. push the new array into the data
    var dataList = [];
    var investment = 0;
    var donation = 0;
    var entertainment = 0;
    var shopping = 0;
    var transportation = 0;
    this.state.listingData.map(function (receive) {
      if (receive.category === "investment") {
        investment = investment + parseInt(receive.price);
      } else if (receive.category === "donation") {
        donation = donation + parseInt(receive.price);
      } else if (receive.category === "entertainment") {
        entertainment = entertainment + parseInt(receive.price);
      } else if (receive.category === "shopping") {
        shopping = shopping + parseInt(receive.price);
      } else if (receive.category === "transportation") {
        transportation = transportation + parseInt(receive.price);
      }
      // dataList.push({ x: receive.category, y: receive.price });
    });
    dataList.push({ x: "donation", y: donation });
    dataList.push({ x: "investment", y: investment });
    dataList.push({ x: "entertainment", y: entertainment });
    dataList.push({ x: "shopping", y: shopping });
    dataList.push({ x: "transportation", y: transportation });
    console.log(dataList);

    // Modal Section
    const { modalVisible } = this.state;

    return (
      <ScrollView>
        <View style={styles.pieContainer}>
          <VictoryPie
            colorScale={colorScale}
            data={dataList}
            animate={{ duration: 0 }}
            //   data={sampleData}

            //set the labels
            innerRadius={85}
            labelRadius={({ innerRadius }) => innerRadius + 35}
            cornerRadius={5}
            padAngle={1}
            labels={({ datum }) => `${datum.y}`}
            style={{
              labels: { fill: "white", fontSize: 14, fontWeight: "bold" },
            }}
            //set radius
            padding={{ top: 20, bottom: 20 }}
          />
        </View>

        <VictoryLegend
          style={{
            labels: { fill: "black", fontSize: 15, fontWeight: "bold" },
          }}
          x={30}
          y={0}
          //   title="Legend"
          centerTitle
          orientation="vertical"
          gutter={20}
          data={categoryData}
          colorScale={colorScale}
          height={150}
        />

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  It looks like you still have money left over from your monthly
                  expenses to invest, Find out more on our Investment Page.
                </Text>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: colors.blue }}
                  onPress={() => {
                    this.props.navigation.navigate("InvestmentHome");
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Learn more on Investment</Text>
                </TouchableHighlight>

                <Text style={styles.modalText}>
                  Or, make a donation if you can help!
                </Text>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: colors.blue }}
                  onPress={() => {
                    this.props.navigation.navigate("DonationEntry");
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>
                    Find out more on donation
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    ...styles.closeButton,
                  }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Go Back</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Check This Week's Report</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const colorScale = [
  "#5e8c6a",
  "#8a365d",
  "#2e5b99",
  "#817094",
  "pink",
  "lightblue",
  "qualitative",
];

const sampleData = [
  { x: "donation", y: 0 },
  { x: "investment", y: 220 },
  { x: "entertainment", y: 0 },
  { x: "shopping", y: 0 },
  { x: "transportation", y: 0 },
];

const categoryData = [
  { name: "donation" },
  { name: "investment" },
  { name: "entertainment" },
  { name: "shopping" },
  { name: "transportation" },
];

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pieContainer: {
    flex: 1,
    marginBottom: 0,
    // color: 'black',
  },

  button: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
    width: "50%",
  },
  openButton: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    marginTop: 50,

    backgroundColor: colors.blue,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  text: {
    marginTop: 10,
    padding: 10,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: colors.blue,
    borderRadius: 6,
    color: colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalText: {
    marginTop: 10,
    padding: 10,
    paddingVertical: 8,
    // borderWidth: 3,
    borderColor: colors.blue,
    borderRadius: 6,

    color: colors.blue,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  btnText: {
    color: colors.white,

    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  tipContainer: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
