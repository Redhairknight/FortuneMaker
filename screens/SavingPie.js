import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { VictoryPie, VictoryLegend, VictoryBar } from "victory-native";
import colors from "../config/colors";

//import firebase
// <<<<<<< week10-Saving
import * as firebase from "firebase";
import colors from "../config/colors";
import { NavigationActions } from "react-navigation";


export default class SavingPie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listingData: []
        }
    }

    // capture the data before it loads
    // this method is inspired by "Beginner Programmers" on:
    // https://www.youtube.com/watch?v=1jIKovuhtAU&t=615s&ab_channel=BeginnerProgrammers
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
        dataList.push({ x: 'donation', y: donation })
        dataList.push({ x: 'investment', y: investment })
        dataList.push({ x: 'entertainment', y: entertainment })
        dataList.push({ x: 'shopping', y: shopping })
        dataList.push({ x: 'transportation', y: transportation })
        console.log(dataList);

        return (
            <View style={styles.container}>
                <VictoryPie
                    style={styles.container}
                    colorScale={colorScale}
                    data={dataList}
                    //set the labels
                    innerRadius={45}
                    labelRadius={({ innerRadius }) => innerRadius + 65}
                    cornerRadius={5}
                    padAngle={2}
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
// =======
// import firebaseConfig from "../config/firebase";
// import * as firebase from "firebase";
// import colors from "../config/colors";
// import { Inter_900Black } from "@expo-google-fonts/inter";
// import { NavigationActions } from "react-navigation";

// export default class SavingPie extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       listingData: [],
//     };
//   }

//   // capture the data before it loads
//   componentWillMount() {
//     var that = this;
//     var userId = firebase.auth().currentUser.uid;
//     let q = firebase.database().ref("Transaction/" + userId);
//     var finished = [];

//     q.once("value", (snapshot) => {
//       snapshot.forEach(function (data) {
//         let result = data.val();
//         result["key"] = data.key;
//         finished.push(result);
//       });
//     }).then(function () {
//       that.setState({
//         listingData: finished,
//       });
//     });
//   }

//   state = {
//     count: 0,
//   };

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     var dataList = [];
//     var investment = 0;
//     var donation = 0;
//     var entertainment = 0;
//     var shopping = 0;
//     var transportation = 0;
//     this.state.listingData.map(function (receive) {
//       if (receive.category === "investment") {
//         investment = investment + parseInt(receive.price);
//       } else if (receive.category === "donation") {
//         donation = donation + parseInt(receive.price);
//       } else if (receive.category === "entertainment") {
//         entertainment = entertainment + parseInt(receive.price);
//       } else if (receive.category === "shopping") {
//         shopping = shopping + parseInt(receive.price);
//       } else if (receive.category === "transportation") {
//         transportation = transportation + parseInt(receive.price);
//       }
//       // dataList.push({ x: receive.category, y: receive.price });
//     });
//     dataList.push({ x: "donation", y: donation });
//     dataList.push({ x: "investment", y: investment });
//     dataList.push({ x: "entertainment", y: entertainment });
//     dataList.push({ x: "shopping", y: shopping });
//     dataList.push({ x: "transportation", y: transportation });
//     console.log(dataList);

//     return (
//       <View style={styles.container}>
//         <VictoryPie
//           style={styles.container}
//           colorScale={colorScale}
//             // data={dataList}
//           data={sampleData}
//           //set the labels
//           innerRadius={45}
//           labelRadius={({ innerRadius }) => innerRadius + 65}
//           cornerRadius={5}
//           padAngle={2}
//           labels={({ datum }) => `${datum.x}: ${datum.y}`}
//           style={{
//             labels: { fill: "white", fontSize: 16, fontWeight: "bold" },
//           }}
//           //set radius
//           //   radius={({ datum }) => datum.y * 4}
//           padding={{ top: 10, bottom: 35 }}
//         />

//         <ScrollView style={styles.scrollView}>
//           <View style={styles.tipContainer}>
//             <Text style={styles.text}>
//               It looks like you still have money left over from your monthly
//               expenses to invest, Find out more on our Investment Page.
//             </Text>
//           </View>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               this.props.navigation.navigate(
//                 "Investment",
//                 {},
//                 NavigationActions.navigate({
//                   routeName: "ProductsDetail",
//                 })
//               );
//               console.log("it is clicked");
//             }}
//           >
//             <Text style={styles.btnText}>Learn more on Investment</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     );
//   }
// >>>>>>> master
}

const colorScale = [
  "tomato",
  "orange",
  "gold",
  "lightgreen",
  "pink",
  "lightblue",
  "lightgreen",
];

const sampleData = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 },
  { x: "Chang", y: 80 },
  { x: "Xu", y: 55 },
  { x: "Xin", y: 55 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
    width: "100%",
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 10,
  },
  text: {
    marginTop: 10,
    padding: 10,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: colors.blue,
    borderRadius: 6,
    // backgroundColor: colors.blue,
    color: colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnText: {
    color: colors.white,

    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  tipContainer: {},
});
