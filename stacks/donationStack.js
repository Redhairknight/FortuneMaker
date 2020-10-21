// Import detailed donation screens here
import donationEntry from "../screens/donationEntry";
import donationCharityBrief from "../screens/donationCharityBrief"
import donationIndex from "../screens/donationIndex";
import donationCanTeen from "../screens/donationCanTeen";
import donationPayment from "../screens/donationPayment";
import donationPaymentSuccess from "../screens/donationPaymentSuccess"
import donationAKF from "../screens/donationAKF"
import donationCareFlight from "../screens/donationCareFlight"
import donationFlyingDoctor from "../screens/donationFlyingDoctor"
import donationFred from "../screens/donationFred"
import donationGuideDogs from "../screens/donationGuideDogs"
import donationHistory from "../screens/donationHistory"



import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const DonationStack = createStackNavigator({
  DonationEntry: {
    screen: donationEntry,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Welcome to Donation",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  DonationCharityChoose : {
    screen: donationCharityBrief,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Step 1 : Choose a charity",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  DonationIndex : {
    screen: donationIndex,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Step 2 : Give Donation",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  CanTeen :{
    screen: donationCanTeen,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "CanTeen",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  DonationPayment :{
    screen: donationPayment,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Step 3 : Confirm your detail",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  DonationPaymentSuccess : {
    screen: donationPaymentSuccess,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Payment Succeed",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  AKF : {
    screen: donationAKF,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "AKF",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  CareFlight : {
    screen: donationCareFlight,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "CareFlight",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  FlyingDoctor : {
    screen: donationFlyingDoctor,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "FlyingDoctor",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  Fred : {
    screen: donationFred,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Fred",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  GuideDogs : {
    screen: donationGuideDogs,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "GuideDogs",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
  DonationHistory : {
    screen: donationHistory,
    navigationOptions:{
      headerTitleAlign: "center",
      headerTitle: "Donation History",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },

  
});


export default createAppContainer(DonationStack);
