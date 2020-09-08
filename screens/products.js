import React, { Component } from "react";
import { render } from "react-dom";
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
    return (
      <ScrollView>
        <View style={styles.container}>

          <View>
            <Header searchBar rounded style={styles.searchBar}>
              <Item>
                <Input placeholder="Input financial product" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </View>
          <View style={styles.productLabelContainer}>
            <TouchableOpacity style={styles.productLabels}>
              <Text>Product Name</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.productLabels}>
              <Text> Units</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLabels}>
              <Text>Rate of Return</Text>
              <Image
                style={styles.labelLogo}
                source={require("../assets/product_button1.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
            </View>
          </View>
          <View style={styles.financialProductContainer}>
            <View style={styles.productProp}>
              <Text style={styles.productName}>US Insight Fund Z</Text>
              <Text style={styles.productNumber}>LU1121088667</Text>
              <Text style={styles.productInstitution}>
                Morgan Stanley Investment Funds
              </Text>
            </View>
            <View style={styles.productUnit}>
              <Text style={styles.unitProp}> USD 70.76</Text>
            </View>
            <View>
              <Text>77.83%</Text>
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
