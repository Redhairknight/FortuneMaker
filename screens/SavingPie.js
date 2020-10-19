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

        let q = firebase.database().ref('Transaction');
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
        this.state.listingData.map(function (receive) {
            dataList.push({ x: receive.Category, y: receive.price });
            console.log(dataList);
        })

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
                            name: 'Entertainment',
                            symbol: { fill: 'tomato', type: 'square' },
                        },
                        {
                            name: 'Clothing',
                            symbol: { fill: 'orange', type: 'square' },
                        },
                        {
                            name: 'Gocery',
                            symbol: { fill: 'gold', type: 'square' },
                        },
                        {
                            name: 'Learning',
                            symbol: { fill: 'navy', type: 'square' },
                        },
                        {
                            name: 'Other',
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
