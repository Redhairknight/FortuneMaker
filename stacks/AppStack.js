import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import InvestmentStack from "./investmentStack";
import SavingStack from "./savingStack"
import DonationStack from "./donationStack"
import ProfileStack from './profileStack'


function Feed() {
  return <SavingStack/>;
}

function Investment() {
  return <InvestmentStack />;
}

function Profile() {
  return <ProfileStack />;
}

function Donation(){
  return <DonationStack />;
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Saving"
      tabBarOptions={{
        activeTintColor: "#1F4E79",
        inactiveBackgroundColor: "#1F4E79",
        activeBackgroundColor: "white",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Saving"
        component={Feed}
        options={{
          tabBarLabel: "Saving",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarLabel: "Investment",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-areaspline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarLabel: "Donation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="charity" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function AppStack() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}