import React, { Component } from "react";
import { render } from "react-dom";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert
} from "react-native";
import { Container, Header, Item, Input, Icon } from "native-base";
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'
import Swipeable from "react-native-gesture-handler/Swipeable";
import retrieveDatabse from "../components/DatabaseManager";
import { Button } from 'react-native-elements';


export default class SearchBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adata: 'have not set up',
      pop2: false,
      pop1: false,
      productNumber: 0,
      pop: false,
      price: 0,
      name: 0,
      rateofreturn: 0,
      intitution: 0,
      number: 0,
      totalInvestment: 0,
      type: null


    }
    this.testFunction = this.testFunction.bind(this)

  }

  getData() {
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        adata: "app",
      })
    }, 2000)
  }

  componentDidMount() {
    this.getData();
  }

  getCurrentDates = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var second = new Date().getSeconds();
    return hour + ':' + min + ':' + second + ' ' + date + '-' + month + '-' + year;//format: dd-mm-yyyy;
  }


  //  a is the time of iteration. 
  testFunction(a) {
    var name1 = retrieveDatabse(`/investment/financialproductlist/${a}/name`);
    var number1 = retrieveDatabse(`/investment/financialproductlist/${a}/number`);
    var price1 = retrieveDatabse(`/investment/financialproductlist/${a}/price`);
    var rateofreturn1 = retrieveDatabse(`/investment/financialproductlist/${a}/rateofreturn`);
    var institution1 = retrieveDatabse(`/investment/financialproductlist/${a}/institution`);
    var totalInvestment1 = retrieveDatabse("/Account/account1/Available");
    var type1 = retrieveDatabse(`/investment/financialproductlist/${a}/type`);


    return (<TouchableOpacity onPress={() => this.setState({ price: price1, pop: true, name: name1, institution: institution1, rateofreturn: rateofreturn1, number: number1, totalInvestment: totalInvestment1, type: type1 })}>
      <Modal
        transparent={this.state.pop}
        visible={this.state.pop}>
        <View style={styles.popWindow}>
          <Text>Do you want to buy this product?</Text>
          <Text>Product Name: {this.state.name}</Text>
          <Text>Price:{this.state.price} </Text>
          <TextInput style={styles.numberInput}
            placeholder='Please input the number'
            onChangeText={(val) => this.setState
              ({ productNumber: val })
            }
          ></TextInput>
          <Text>You need to pay ${this.state.productNumber * this.state.price} </Text>
          <TouchableOpacity onPress={() => {
            this.setState({ pop: false }); firebase.database().ref(`investment/Favorite/` + firebase.auth().currentUser.uid + `/` + this.state.name).set
              ({
                name: this.state.name,
                price: this.state.price,
                date: this.getCurrentDates()

              })
          }}><Text>Add to favorite</Text></TouchableOpacity>
          <View style={{ padding: 5 }}>
            <Button title='CONFIRM' onPress={() => {
              this.setState({ pop: false });
              firebase.database().ref('investment/newTransHistory/' + firebase.auth().currentUser.uid + '/' + this.getCurrentDates()).set
                ({
                  name: this.state.name,
                  price: this.state.productNumber * this.state.price,
                  date: this.getCurrentDates()

                });
              firebase.database().ref("/Account/account1/").set({
                Available: this.state.totalInvestment - this.state.productNumber * this.state.price
              })

            }} ></Button>
          </View>

          <View style={{ padding: 5 }}>
            <Button title='CANCEL' onPress={() => this.setState({ pop: false })} ></Button>

          </View>
        </View>
      </Modal>
      <View style={styles.financialProductContainer}>
        <View style={styles.productProp}>
          <Text style={styles.productName}>{name1}</Text>
          <Text style={styles.productNumber}>{number1}</Text>
          <Text style={styles.productInstitution}>
            {institution1}
          </Text>
        </View>
        <View style={styles.productUnit}>
          <Text style={styles.unitProp}> {price1}</Text>
        </View>
        <View style={styles.productType}>
          <Text>{type1}</Text>
        </View>
        <View>
          <Text>{rateofreturn1}</Text>
        </View>
      </View>
    </TouchableOpacity >)
  }

  render() {

    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var hour = new Date().getHours();
      var min = new Date().getMinutes();
      var second = new Date().getSeconds();
      return hour + ':' + min + ':' + second + ' ' + date + '-' + month + '-' + year;//format: dd-mm-yyyy;
    }

    return (
      <ScrollView>
        <View style={styles.container}>

          <View>
            <Header searchBar rounded style={styles.searchBar}>
              <Item>
                <Input placeholder="Input financial product" />
              </Item>
            </Header>
          </View>

          <View style={styles.productLabelContainer}>
            <TouchableOpacity style={styles.productNameLabel}>
              <Text>Product Name</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.productLabels}>
              <Text> Units</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.productLabels}>
              <Text>Type</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productLabels}>
              <Text>Rate of Return</Text>

            </TouchableOpacity>
          </View>

          {this.testFunction(1)}
          {this.testFunction(2)}
          {this.testFunction(3)}
          {this.testFunction(4)}
          {this.testFunction(5)}
          {this.testFunction(6)}

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
  productLabelContainer: { height: 50, flexDirection: "row" },
  productNameLabel: { width: "40%", flexDirection: "row" },
  productLabels: { width: "20%", flexDirection: "row" },
  financialProductContainer: {
    height: 80,
    flexDirection: "row",
    padding: 3,
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },

  productProp: {
    width: "40%",
  },
  labelLogo: { height: 10, width: 10, bottom: -3 },
  productName: { fontWeight: "bold" },
  productNumber: { fontSize: 10, padding: 5 },
  productInstitution: { fontSize: 5 },
  productUnit: { fontWeight: "bold", width: "24%" },
  productType: { width: "20%" },
  unitProp: { fontWeight: "bold", fontSize: 18 },
  popWindow: { backgroundColor: "white", flex: 1, margin: 60, padding: 40, borderRadius: 10 },
  numberInput: {
    borderWidth: 1,
    borderColor: '#777'
  }
};
