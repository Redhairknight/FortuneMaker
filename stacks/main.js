import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import InvestmentStack from "./investmentStack";
import InvestmentEducation from "../screens/investmentEducation";
import SavingStack from "./savingStack"
import DonationStack from "./donationStack"


function Feed() {
  return <SavingStack/>;
}

function Investment() {
  return <InvestmentStack />;
}

function Profile() {
  return <InvestmentEducation />;
}

function Donation(){
  return <DonationStack />;
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Investment"
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
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarLabel: "Investment",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarLabel: "Donation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
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

export default function MainScreen() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}