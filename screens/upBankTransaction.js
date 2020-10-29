import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
  Modal,
  Alert,
} from "react-native";

import retrieveApi from "../components/ApiManager";

import colors from "../config/colors";

// icon source:
// [Guzman y Gomez.png] [icon] https://www.guzmanygomez.com/
// [Domino's.png] [icon] https://iconscout.com/icon/dominos-pizza-1863639
// [vending.png] [icon] https://699pic.com/tupian-400284479.html
// [cafe.png] [icon] https://toppng.com/ranos-de-caf%c3%a9-icono-de-taza-de-cafe-PNG-free-PNG-Images_171716?search-result=taza
// [EASI.png] [icon] https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Feasiaustralia&psig=AOvVaw3yJQhZixuDPxxaQ66V1u2g&ust=1604069663368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDcraaH2uwCFQAAAAAdAAAAABAN

var REQUEST_URL = "https://api.up.com.au/api/v1/transactions";
var STORAGE_KEY =
  "Bearer up:yeah:UwoTA9D94NS8PwnSsfYCEkqwDqEdhSOJXlRqQIMS6b9UONH0L9B6lcAqS0pFd3770hxBxkut9laaaR2llyObIU9pZLvl5lCqiIyqv3e60LLBBvyNUvcTU8gjhPVCyhbk";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  // fetch data from upBank API
  useEffect(() => {
    fetch(REQUEST_URL, {
      headers: {
        Authorization: STORAGE_KEY,
      },
    })
      // fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        // console.log(json.data);
      })

      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function GetImg(props) {
    console.log(props);
    // const imgName = props.imgName;

    switch (props) {
      case "Domino's":
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/Domino's.png")}
          />
        );
      case "Guzman y Gomez":
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/Guzman_y_Gomez.png")}
          />
        );
      case "Lakeside Cafe":
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/cafe.png")}
          />
        );
      case "The Trustee for GDK Fa Murarri":
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/vending.png")}
          />
        );
      case "EASI":
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/EASI.png")}
          />
        );
        break;

      default:
        return (
          <Image
            style={styles.imageL}
            source={require("../assets/Welcome/upbank.png")}
          />
        );
        break;
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          (data.forEach((a) => {}),
          (
            //iterate transactions in FlatList
            <FlatList
              style={styles.list}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.items}>
                  <View>
                    {GetImg(item.attributes.description)}
                    <Text style={styles.itemDesc}>
                      {item.attributes.description}
                    </Text>
                  </View>

                  <Text style={styles.itemCategory}>
                    {item.relationships.category.data.id}
                  </Text>

                  <Text style={styles.itemCurrency}>
                    {item.attributes.amount.value}{" "}
                    {item.attributes.amount.currencyCode}
                  </Text>

                  <Text style={styles.itemCurrency}>
                    {item.attributes.createdAt.substring(0, 16)}
                  </Text>
                </View>
              )}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  list: { marginVertical: 20 },
  items: {
    borderColor: colors.blue,
    // borderTopColor: colors.white,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  itemDesc: {
    fontSize: 18,
    // backgroundColor: colors.grey,
    // margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontWeight: "bold",
  },

  itemCategory: {
    fontSize: 18,
    borderColor: "transparent",
    borderTopColor: colors.blue,
    borderWidth: 1,
    marginTop: 25,
    textAlign: "right",
    // backgroundColor: colors.blue,
    marginRight: 5,
    // maxWidth: 180,
  },
  itemCurrency: {
    // backgroundColor: colors.blue,
    fontSize: 16,
    // borderColor: "transparent",
    // borderTopColor: colors.blue,
    // borderWidth: 1,
    textAlign: "right",
    marginRight: 5,
    fontWeight: "bold",
  },
  itemTitle: {
    textAlign: "left",
  },
  imageL: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
