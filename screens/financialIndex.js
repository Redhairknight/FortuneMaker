import { Input, Item } from "native-base";
import React, { useState, useCallback, useRef } from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, FlatList, Modal} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class FinancialIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          stockChartYValues: [],
          StockSymbol: ['TSLA', 'AAPL', 'GE', 'BAC', 'FB', 'VZ', 'CSCO', 'NFLX', 'BA'
                        ,'DAL', 'MS', 'JPM', 'ORCL'],
        }
      }
      
      
      componentDidMount() {
          this.state.StockSymbol.forEach(symbol => {
            this.fetchStock(symbol);
          });

      }
    
      fetchStock(symbol) {
        const pointerToThis = this;
        const API_KEY = '33USA38GJYOUEIHD';
        let StockSymbol = symbol;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartYValuesFunction = [];
    
        fetch(API_Call)
          .then(
            function(response) {
              return response.json();
            }
          )
          .then(
            function(data) {
              for (var key in data['Time Series (Daily)']) {
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
              }
            
              
              pointerToThis.setState( state => ({
                stockChartYValues: state.stockChartYValues.concat([{ticker: symbol, price: stockChartYValuesFunction[0]}])
            }));
            }
          )
      }

      processData(price) {

        if (price != null && price != "") {
            return price
        }
      }

    render() {

        var price = this.state.stockChartYValues
        var data = this.processData(price)
        /*
        [
            {
              "price": "1000",
              "ticker": "GE",
            },
            {
              "price": "100",
              "ticker": "BAC",
            },
            {
              "price": "100",
              "ticker": "AAPL",
            },
            {
              "price": "100",
              "ticker": "TSLA",
            },
            {
              "price": "100",
              "ticker": "FB",
            },
          ]
          */

          const format = amount => {
            return Number(amount)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,');
          };

        return (
        <SafeAreaView style={{flex: 1, }}>
            <TouchableOpacity style={styles.addButton}>
                <MaterialCommunityIcons
                    name='plus'
                    size={30}
                    color='#1F4E79'
                    />
            </TouchableOpacity>
            <FlatList
                keyExtractor={(item) => item.ticker}
                data={data}
                renderItem={({item}) => (
                    <View style={styles.companyContainer}>
                        <Text style={styles.ticker}>{item.ticker}</Text>
                        <Text style={styles.price}>$ {format(item.price)}</Text>
                    </View>
                )}
            />
            <Modal visible={false} animationType='slide'>
                <Text></Text>
                <Input></Input>
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
    }
})

export default FinancialIndex;