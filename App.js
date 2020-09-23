// Import firebase here
import firebaseConfig from './config/firebase'
import * as firebase from 'firebase'

import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import screens or staccks here
import WelcomeScreen from "./screens/WelcomeScreen";
import Main from "./stacks/main";
import RegisterScreen from './screens/Register';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

import { createStackNavigator,} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";




// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


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