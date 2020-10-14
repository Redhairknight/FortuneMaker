import React, { Component } from "react";
import { render } from "react-dom";
import firebaseConfig from "../config/firebase";
import * as firebase from "firebase";
import retrieveDatabse from "../components/DatabaseManager"


import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container, Header, Item, Input, Icon, Button } from "native-base";



export default class SearchBarExample extends Component {
  render() {
    var test = retrieveDatabse("/investment/financialproduct/name/price");
    var date = retrieveDatabse("/investment/transactionHistory/date")
    var productName = retrieveDatabse("/investment/transactionHistory/financialProduct")
    var price = retrieveDatabse("/investment/transactionHistory/price")

    return (
      <ScrollView>
        <View style={styles.container}>

          
          <View style={styles.productLabelContainer}>
            <TouchableOpacity style={styles.productLabels}>
              <Text>Transaction date</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.productLabels}>
              <Text> product name</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLabels}>
              <Text>price</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
    <Text style={styles.productName}>{date}</Text>

            </View>
            <View style={styles.productUnit}>
    <Text style={styles.unitProp}> {productName}</Text>
            </View>
            <View>
    <Text>{price}$</Text>
            </View>
          </View>
          
          
          
          
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  searchBar: {},
  header: { textAlign: "center" },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#1F4E79",
  },
  searchBar: { backgroundColor: "#1F4E79" },
  headerText: { fontSize: 20, color: "white" },
  productLabelContainer: { height: 30, flexDirection: "row" },
  productLabels: { width: "34%", flexDirection: "row" },
  financialProductContainer: {
    height: 80,
    flexDirection: "row",
    padding: 3,
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
  productProp: {
    width: "35%",
  },
  labelLogo: { height: 10, width: 10, bottom: -3 },
  productName: { fontWeight: "bold" },
  productNumber: { fontSize: 10, padding: 5 },
  productInstitution: { fontSize: 5 },
  productUnit: { fontWeight: "bold", width: "40%" },
  unitProp: { fontWeight: "bold", fontSize: 18 },
};
