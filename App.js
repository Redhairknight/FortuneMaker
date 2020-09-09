import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import screens or staccks here
import WelcomeScreen from "./screens/WelcomeScreen";
import Main from "./stacks/main";
import RegisterScreen from './screens/Register';


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

  RegisterScreen: {
    screen: RegisterScreen,
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