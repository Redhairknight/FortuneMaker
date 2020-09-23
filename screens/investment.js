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
import { render } from "react-dom";
import { createAppContainer } from "react-navigation";

class Investment extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.head}>
            <TouchableWithoutFeedback style={styles.head_top_up}>
              <View style={styles.head_top}>
                <View style={styles.head_top_up}>
                  <Text style={styles.head_text}>Total pull</Text>
                </View>
                <View style={styles.head_top_middle}>
                  <Text style={styles.head_top_middle_text}>
                    300555
                    <Image
                      style={styles.tinyLogo}
                      source={require("../assets/tiny_arrow.png")}
                    />
                  </Text>
                </View>
                <View style={styles.head_top_down}>
                  <View style={styles.row_container}>
                    <Text style={styles.head_top_down_text}>
                      Earings yesterday
                    </Text>
                    <Text style={styles.head_top_down_number}>+455.73</Text>
                  </View>
                  <View style={styles.row_container}>
                    <Text style={styles.head_top_down_text}>
                      Rate of return
                    </Text>
                    <Text style={styles.head_top_down_number}>2.41%</Text>
                  </View>
                  <View style={styles.row_container}>
                    <Text style={styles.head_top_down_text}>
                      Accumulated earnings
                    </Text>
                    <Text style={styles.head_top_down_number}>+455.73</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.head_bottom}>
              <View style={styles.head_bottom_up}>
                <View style={styles.head_bottom_up_left}>
                  <Text style={{alignSelf: "center", paddingTop: 40, fontSize: 20,}}>Short term</Text>
                </View>
                <View style={styles.head_bottom_up_right}>
                  <Text style={{alignSelf: "center", paddingTop: 40, fontSize: 20,}}>Short term</Text>
                </View>
              </View>
              <View style={styles.head_bottom_down}></View>
            </View>
          </View>
          <View style={styles.middle}>
            <View style={styles.middle_three_button}>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("ProductsDetail")}
              >
                <View style={styles.buttons}>
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
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button2.png")}
                  />
                  <Text style={styles.buttons_text}>Invest Education</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttons}>
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button3.png")}
                  />
                  <Text style={styles.buttons_text}>Transation History</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.middle_three_button}>
              <TouchableOpacity>
                <View style={styles.buttons}>
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button4.png")}
                  />
                  <Text style={styles.buttons_text}>Risk Survry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("FavoriteDetail")}
                >
                <View style={styles.buttons}>
                  <Image
                    style={styles.buttonLogo}
                    source={require("../assets/button5.png")}
                  />
                  <Text style={styles.buttons_text}>Favorite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttons}>
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
            <TouchableOpacity>
              <View style={styles.bottom_content}>
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
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button7.png")}
                />
                <Text style={styles.bottom_text}>Financial News</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bottom_content}>
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button8.png")}
                />
                <Text style={styles.bottom_text}>Financial Indexes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bottom_content}>
                <Image
                  style={styles.bottom_Logos}
                  source={require("../assets/button9.png")}
                />
                <Text style={styles.bottom_text}>Portfortlios</Text>
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
  contentContainer: {
    height: "110%",
  },
  head: {
    flex: 5,
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
    justifyContent: "space-around",
    flexDirection: "row",
  },
  head_top_down_text: {
    color: "#BEBEBE",
    fontSize: 10,
  },
  head_top_down_number: {
    color: "#FFFFFF",
    fontSize: 18,
    alignSelf: "center",
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
    flex: 3,
    backgroundColor: "#ECECEC",
  },
  bottoms: { flex: 1, flexDirection: "row" },
  middle_three_button: { flex: 1, flexDirection: "row", padding: 5 },

  bottom: {
    flex: 3,
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "#ECECEC",
    width: 130,
    alignItems: "center",
  },
  botton_buttons: { width: 20, height: 20 },
  buttons_text: { fontSize: 10 },
  bottom_Logos: { height: 30, width: 30 },
  bottom_content: {
    height: 50,

    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  bottom_text: { paddingLeft: 20 },
});

export default Investment;
