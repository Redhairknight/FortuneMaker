import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ColorPropType,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import retrieveDatabse from "../components/DatabaseManager"
import * as firebase from 'firebase'

class Investment extends React.Component {

  constructor(props) {
    /** connect and retrive data before the render */

    super(props);
    this.state = {
      totalInvestment: retrieveDatabse("/Account/account1/Available"),
      adata: "a",
      score: retrieveDatabse("/investment/riskSurvey/" + firebase.auth().currentUser.uid + "/score"),
    }
  }

  checkInvestorType = (score) => {
    /** return the risk type of investor based the risk survey score */

    console.log(score)
    var type = ''
    if (score <= 30) {
      type = 'Conservative'
    } else if (31 <= score && score <= 45) {
      type = 'Moderately Conservative'
    } else if (46 <= score && score <= 65) {
      type = 'Moderate'
    } else if (66 <= score && score <= 80) {
      type = 'Moderately Aggressive'
    } else {
      type = 'Aggressive'
    }
    return type;
  };


  getData() {
    setTimeout(() => {
      this.setState({
        adata: "app",
      })
    }, 2000)
  }


  componentDidMount() {
    this.getData();
    //Here is the Trick
    const { navigation } = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({ count: 0 });
    });
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }
  render() {
    var totalInvestment = retrieveDatabse("/Account/account1/Available")
    var score = retrieveDatabse("/investment/riskSurvey/" + (firebase.auth().currentUser.uid) + "/score")
    console.log(totalInvestment)
    const format = amount => {
      return Number(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    var riskType = this.checkInvestorType(this.state.score)
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.head}>
            <TouchableWithoutFeedback style={styles.head_top_up}>
              <View style={styles.head_top}>
                <View style={styles.head_top_up}>
                  <Text style={styles.head_text}>Total Investment</Text>
                </View>
                <View style={styles.head_top_middle}>
                  <Text style={styles.head_top_middle_text}>
                    $ {format(totalInvestment)}
                    <Image
                      style={styles.tinyLogo}
                      // icon source: https://www.flaticon.com/
                      source={require("../assets/tiny_arrow.png")}
                    />
                  </Text>
                </View>
                <View style={styles.head_top_down}>

                  <View style={styles.row_container}>
                    <Text style={styles.head_top_down_text}>
                      Risk score
                    </Text>
                    <Text style={styles.head_top_down_number}>{score}</Text>
                  </View>
                  <View style={styles.row_container}>
                    <Text style={styles.head_top_down_text}>
                      Risk type
                    </Text>
                    <Text style={styles.head_top_down_number}>{this.checkInvestorType(score)}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>
          <View style={styles.middle}>
            <View style={styles.middle_three_button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductsDetail")}
              >
                <View style={styles.buttons}>

                  {/* icon source: https://www.flaticon.com/ */}
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button1.png")}
                  />
                  <Text style={styles.buttons_text}>Products</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("InvestmentEducationDetail")
                }
              >
                <View style={styles.buttons}>
                  {/* icon source: https://www.flaticon.com/ */}
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button2.png")}
                  />
                  <Text style={styles.buttons_text}>Invest Education</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate("TransactionHistory")
              }>
                <View style={styles.buttons}>
                  <Image
                    style={styles.buttonLogo}
                    // icon source: https://www.flaticon.com/
                    source={require("../assets/button3.png")}
                  />
                  <Text style={styles.buttons_text}>Transation History</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.middle_three_button}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("RiskSurvyDetail")}>
                <View style={styles.buttons}>
                  {/* icon source: https://www.flaticon.com/ */}
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button4.png")}
                  />
                  <Text style={styles.buttons_text}>Risk Survry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("FavoriteDetail")}
              >
                <View style={styles.buttons}>
                  {/* icon source: https://www.flaticon.com/ */}
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button5.png")}
                  />
                  <Text style={styles.buttons_text}>Favorite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("InvestmentHot")}
              >
                <View style={styles.buttons}>
                  {/* icon source: https://www.flaticon.com/ */}
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button6.png")}
                  />
                  <Text style={styles.buttons_text}>Hot</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("InvestmentRecommendation")} >
              <View style={styles.bottom_content}>
                {/* icon source: https://www.flaticon.com/ */}
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button6.png")}
                />
                <Text style={styles.bottom_text}>
                  Investment recommondation
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("FinancialNewsDetail")
              }
            >
              <View style={styles.bottom_content}>
                {/* icon source: https://www.flaticon.com/ */}
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button7.png")}
                />
                <Text style={styles.bottom_text}>Financial News</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("FinancialIndexDetail")}>
              <View style={styles.bottom_content}>
                {/* icon source: https://www.flaticon.com/ */}
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button8.png")}
                />
                <Text style={styles.bottom_text}>Financial Indexes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row_container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: '50%',

  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  buttonLogo: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
  head: {
    height: 250,
    flex: 10,
    backgroundColor: "#1F4E79",
  },
  head_text: {
    fontSize: 16,
    color: "#BEBEBE",
    alignSelf: "center",
  },
  head_top: {
    flex: 6,
    backgroundColor: "#1F4E79",
  },
  head_top_up: {
    flex: 1,
    justifyContent: "flex-end",
  },
  head_top_middle: {
    flex: 1,
    justifyContent: "flex-start",
  },
  head_top_middle_text: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
  head_top_down: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  head_top_down_text: {
    color: "#BEBEBE",
    fontSize: 12,
    marginVertical: 5,
  },
  head_top_down_number: {
    color: "#FFFFFF",
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
  },
  head_bottom: {
    flex: 4,
    backgroundColor: "white",
  },
  head_bottom_up: {
    flex: 3,
    flexDirection: "row",
  },
  head_bottom_up_left: {
    flex: 1,
    borderBottomWidth: 0.2,
    borderColor: "gray",
    backgroundColor: "white",
  },
  head_bottom_up_right: {
    flex: 1,
    borderBottomWidth: 0.2,
    borderColor: "gray",
    backgroundColor: "white",
  },
  head_bottom_down: {
    flex: 1,
  },
  middle: {
    paddingVertical: 20,
    flex: 3,
    backgroundColor: "#ECECEC",
  },
  bottoms: { flex: 1, flexDirection: "row" },
  middle_three_button: { flex: 1, flexDirection: "row", padding: 5, paddingVertical: 20, },

  bottom: {
    flex: 3,
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "#ECECEC",
    width: 130,
    alignItems: "center",
  },
  botton_buttons: { width: 20, height: 20, },
  buttons_text: { fontSize: 10 },
  bottom_Logos: { height: 30, width: 30 },
  bottom_content: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    marginLeft: 10,
  },
  bottom_text: { paddingLeft: 20 },
});

export default Investment;
