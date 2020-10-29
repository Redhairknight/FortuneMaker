import { Input, Item } from "native-base";
import React, { useState, useCallback, useRef } from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, FlatList, Modal, TextInput
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from '../components/indexInput';

class FinancialIndex extends React.Component {

  constructor(props) {
    /** state to store the stock value and stock symbol used to retrive data */

    super(props);
    this.state = {
      stockChartYValues: [],
      stockSymbol: ['TSLA', 'AAPL', 'GE', 'BAC', 'FB', 'VZ', 'CSCO', 'NFLX', 'BA'
        , 'DAL', 'MS', 'JPM', 'ORCL'],
      modalOpen: false,
      tickerInput: "",
    }
  }


  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    /** fetch data from alpha vantage api */

    this.setState({ stockChartYValues: [] })
    this.state.stockSymbol.forEach(symbol => {
      this.fetchStock(symbol);
    });
  }

  fetchStock(symbol) {
    /** set stock ticker and fetch */

    const pointerToThis = this;
    const API_KEY = '33USA38GJYOUEIHD';
    let stockSymbol = symbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          for (var key in data['Time Series (Daily)']) {
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
          }


          pointerToThis.setState(state => ({
            stockChartYValues: state.stockChartYValues.concat([{ ticker: symbol, price: stockChartYValuesFunction[0] }])
          }));
        }
      )
  }

  processData(price) {
    /** filter out null value  */

    if (price != null && price != "") {
      return price
    }
  }

  tickerInput() {
    /** chage the state to the latest data */

    const ticker = this.state.tickerInput
    const symbol = this.state.stockSymbol
    symbol.push(ticker)
    this.setState({ stockSymbol: symbol })
    this.fetchData()
  }

  render() {
    // variables used in text


    var price = this.state.stockChartYValues
    var data = this.processData(price)

    const format = amount => {
      return Number(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    return (
      <SafeAreaView style={{ flex: 1, }}>
        <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ modalOpen: true })}>
          <MaterialCommunityIcons
            name='plus'
            size={30}
            color='#1F4E79'
          />
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item) => item.ticker}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.companyContainer}>
              <Text style={styles.ticker}>{item.ticker}</Text>
              <Text style={styles.price}>$ {format(item.price)}</Text>
            </View>
          )}
        />
        <Modal
          presentationStyle="overFullScreen"
          transparent
          visible={this.state.modalOpen}
        >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: "white",
              width: 300,
              height: 200,
              borderRadius: 20,
              alignItems: "center",
            }}>
              <TouchableOpacity style={styles.modalCloseButton} onPress={() => this.setState({ modalOpen: false })}>
                <MaterialCommunityIcons
                  name='close'
                  size={24}
                  color='white'
                />
              </TouchableOpacity>
              <Text style={styles.modalText}>Type your stock ticker here</Text>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon='ticket-account'
                onChangeText={ticker => this.setState({ tickerInput: ticker })}
                value={this.state.tickerInput}
                placeholder="Type a ticker"
                textContentType="none"
              />
              <TouchableOpacity style={styles.modalConfirm} onPress={() => { this.setState({ modalOpen: false }); this.tickerInput() }}>
                <Text style={styles.modalConfirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  companyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    width: "95%",
    alignSelf: "center",

  },
  ticker: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#1F4E79",

  },
  price: {
    margin: 10,
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",

  },
  addButton: {
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1F4E79",
    padding: 5,
    borderRadius: 100,
    borderStyle: "dashed"
  },
  modalStyle: {
    width: 300,
    height: 300,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#1F4E79",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#1F4E79",
  },
  modalText: {
    color: "#1F4E79",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center"
  },
  modalConfirm: {
    width: 100,
    alignSelf: "center",
    backgroundColor: "#1F4E79",
    height: 30,
    justifyContent: "center",
    margin: 15,
    borderRadius: 10,
  },
  modalConfirmText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  }
})

export default FinancialIndex;