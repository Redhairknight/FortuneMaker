// Import firebase here !
import firebaseConfig from "./config/firebase";
import * as firebase from "firebase";

import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import screens or staccks here
import HelloScreen from "./screens/HelloScreen";
import AppStack from "./stacks/AppStack";
import RegisterScreen from "./screens/Register";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";

import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import retrieveDatabse from "./components/DatabaseManager"
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  //firebase.auth().signOut()
}


//to delete
var test = retrieveDatabse("/investment/financialproduct/name/price");
console.log('fuck'+test)




const AuthStack = createStackNavigator(
  { 
    Loading: LoadingScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Hello: HelloScreen,
  },
  {
    initialRouteName: "Hello",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      
      Auth: AuthStack,
      App: AppStack,
    },
    {
       initialRouteName: "Auth",
    }
  )
);

export default AppContainer;
