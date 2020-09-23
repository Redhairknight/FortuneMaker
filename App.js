import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import firebase here
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDhSAfe5z0ovAC-zxa262V_y5aZpGnF4AE",
  authDomain: "fortunemaker-f8e7f.firebaseapp.com",
  databaseURL: "https://fortunemaker-f8e7f.firebaseio.com",
  projectId: "fortunemaker-f8e7f",
  storageBucket: "fortunemaker-f8e7f.appspot.com",
  messagingSenderId: "593282123312",
  appId: "1:593282123312:web:24477a0700ec851c2b8ff5"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Import screens or staccks here
import WelcomeScreen from "./screens/WelcomeScreen";
import Main from "./stacks/main";
import RegisterScreen from './screens/Register';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

import { createStackNavigator,} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


const MainStack = createStackNavigator({

  // Login screen
  Welcom: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  // Register Screen & Login Screen
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  // Loading Screen
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  // App screens
  MainScreen: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
    },
  },

});


const AppContainer = createAppContainer(MainStack)

export default AppContainer