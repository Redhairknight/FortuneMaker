import React, { Component } from "react";
import { render } from "react-dom";
import firebaseConfig from "../config/firebase";
import * as firebase from "firebase";
import retrieveDatabse from "../components/DatabaseManager"
import Swipeable from 'react-native-gesture-handler/Swipeable';


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
    constructor(props) {
        /** store the product information in the state */

        super(props);

        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    componentWillMount() {

        var that = this;

        let q = firebase.database().ref('investment/Favorite/' + firebase.auth().currentUser.uid);
        var finished = [];

        q.once('value', snapshot => {
            snapshot.forEach(function (data) {
                let result = data.val();
                result['key'] = data.key;
                finished.push(result);
            })
        }).then(function () {
            that.setState({
                listingData: finished
            })
        })
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>


                    <View style={styles.productLabelContainer}>


                        <TouchableOpacity style={styles.productLabels}>
                            <Text> product name</Text>
                            <Image
                                style={styles.labelLogo}
                                // ranking icon1 source :https://material.io/resources/icons/?style=baseline
                                source={require("../assets/product_button1.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productLabels}>
                            <Text>                       price</Text>
                            <Image
                                style={styles.labelLogo}
                                // ranking icon2 source :https://material.io/resources/icons/?style=baseline
                                source={require("../assets/product_button1.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        {
                            this.state.listingData.map(function (x) {


                                return (
                                    <Swipeable key={x.key}>
                                        <View style={styles.financialProductContainer}>

                                            <View style={styles.productUnit}>
                                                <Text style={styles.unitProp}> {x.name}</Text>
                                            </View>
                                            <View>
                                                <Text>                   {x.price}</Text>
                                            </View>

                                        </View>

                                    </Swipeable>
                                )
                            })
                        }
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







