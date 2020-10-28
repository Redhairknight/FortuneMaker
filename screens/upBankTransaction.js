import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import retrieveApi from "../components/ApiManager";

import colors from "../config/colors";

var REQUEST_URL = "https://api.up.com.au/api/v1/transactions";
var STORAGE_KEY =
  "Bearer up:yeah:UwoTA9D94NS8PwnSsfYCEkqwDqEdhSOJXlRqQIMS6b9UONH0L9B6lcAqS0pFd3770hxBxkut9laaaR2llyObIU9pZLvl5lCqiIyqv3e60LLBBvyNUvcTU8gjhPVCyhbk";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

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

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          (data.forEach((a) => {}),
          (
            <FlatList
              style={styles.list}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.items}>
                  <Text style={styles.itemDesc}>
                    {item.attributes.description}
                  </Text>

                  <Text style={styles.itemCategory}>
                    {item.relationships.category.data.id}
                  </Text>

                  <Text style={styles.itemCurrency}>
                    {item.attributes.amount.value}{" "}
                    {item.attributes.amount.currencyCode}
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
});
