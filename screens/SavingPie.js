import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import {
    VictoryPie,
    VictoryLegend, VictoryBar
} from 'victory-native'
//import firebase
import firebaseConfig from "../config/firebase";
import * as firebase from 'firebase'


export default class SavingPie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    componentWillMount() {

        var that = this;
        var userId = firebase.auth().currentUser.uid;
        let q = firebase.database().ref('Transaction/' + userId);
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

    state = {
        count: 0
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }



    render() {
        var dataList = [];
        var investment = 0;
        var donation = 0;
        var entertainment = 0;
        var shopping = 0;
        var transportation = 0;
        this.state.listingData.map(function (receive) {
            if (receive.category === 'investment') {
                investment = investment + parseInt(receive.price);
            } else if (receive.category === 'donation') {
                donation = donation + parseInt(receive.price);
            } else if (receive.category === 'entertainment') {
                entertainment = entertainment + parseInt(receive.price);
            } else if (receive.category === 'shopping') {
                shopping = shopping + parseInt(receive.price);
            } else if (receive.category === 'transportation') {
                transportation = transportation + parseInt(receive.price);
            }
            // dataList.push({ x: receive.category, y: receive.price });
        })
        dataList.push({x: 'donation', y: donation})
        dataList.push({x: 'investment', y: investment})
        dataList.push({x: 'entertainment', y: entertainment})
        dataList.push({x: 'shopping', y: shopping})
        dataList.push({x: 'transportation', y: transportation})
        console.log(dataList);

        return (
            <View style={styles.container}>
                <VictoryPie


                    colorScale={colorScale}
                    data={dataList}

                    innerRadius={(75)}
                    height={400}
                    width={400}
                    animate={{ duration: 2000 }}
                    labels={({ datum }) => `${datum.x}: ${datum.y}`}
                />

                <VictoryLegend
                    padding={{ top: 0, left: 0 }}
                    title="Weekly Consumption"
                    orientation="vertical"
                    gutter={(25)}
                    data={[
                        {
                            name: 'Donation',
                            symbol: { fill: 'tomato', type: 'square' },
                        },
                        {
                            name: 'Investment',
                            symbol: { fill: 'orange', type: 'square' },
                        },
                        {
                            name: 'Entertainment',
                            symbol: { fill: 'gold', type: 'square' },
                        },
                        {
                            name: 'Shopping',
                            symbol: { fill: 'navy', type: 'square' },
                        },
                        {
                            name: 'transportation',
                            symbol: { fill: 'pink', type: 'square' },
                        }
                    ]}
                    width={(250)}
                />
            </View>
        )
    }
}

const colorScale = ['tomato', 'orange', 'gold', 'navy', 'pink'];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10
    }
});
