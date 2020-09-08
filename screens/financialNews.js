import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  Australian stock market loses ground, weighed down by
                  materials sector
                </Text>
              </View>
              <Text style={styles.new_content}>
                The Australian share market snapped its two-day winning streak
                to close lower on the back of a weak US lead and another rise in
                COVID-19 cases and deaths in Victoria.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button1.png")}
              />
            </View>
          </View>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  Big problem looms for 40% of Aussies who accessed super early
                </Text>
              </View>
              <Text style={styles.new_content}>
                New research has revealed 40 per cent of Australians who
                withdrew superannuation from July 1 were potentially ineligible,
                leaving themselves exposed to an expensive ATO fine.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button4.png")}
              />
            </View>
          </View>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  Tax office to crackdown on people rorting early super for tax
                  benefits{" "}
                </Text>
              </View>
              <Text style={styles.new_content}>
                The Australian Taxation Office has warned it will investigate
                people rorting super withdrawals to avoid paying tax.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button5.png")}
              />
            </View>
          </View>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  Telstra profits plummet 15 percent
                </Text>
              </View>
              <Text style={styles.new_content}>
                Australia’s major telco says it was expecting a hit to its
                bottom line after the double whammy of bushfires and the
                coronavirus pandemic.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button2.png")}
              />
            </View>
          </View>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  Why the gold price is soaring{" "}
                </Text>
              </View>
              <Text style={styles.new_content}>
                Gold prices have surged due to ongoing economic uncertainty
                caused by the coronavirus pandemic. But experts say there is no
                end in sight.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button6.png")}
              />
            </View>
          </View>
          <View style={styles.news_container}>
            <View style={styles.news_leftside}>
              <View>
                <Text style={styles.new_title}>
                  RBA forecast sends ASX lower
                </Text>
              </View>
              <Text style={styles.new_content}>
                A revised economic forecast by the Reserve Bank sent the
                Australian sharemarket lower, with miners among those sold off.
              </Text>
            </View>
            <View style={styles.news_rightside}>
              <Image
                style={styles.news_image}
                source={require("../assets/news_button3.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: { flex: 1, alignItems: "center" },
  header: {
    height: 70,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F4E79",
  },
  header_title: { color: "white", fontSize: 20 },
  news_container: {
    flexDirection: "row",
    height: 160,
    width: "100%",
    padding: 5,
  },
  news_leftside: { width: "60%" },
  news_rightside: { width: "40%" },
  new_title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  new_content: { fontSize: 12 },
  news_image: { width: "80%", height: "80%", borderRadius: 15 },
};
