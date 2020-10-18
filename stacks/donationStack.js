// Import detailed donation screens here
import donationEntry from "../screens/donationEntry";
import donationCharityBrief from "../screens/donationCharityBrief"
import donationIndex from "../screens/donationIndex";
import donationCanTeen from "../screens/donationCanTeen";
import donationPayment from "../screens/donationPayment";
import donationPaymentSuccess from "../screens/donationPaymentSuccess"


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const DonationStack = createStackNavigator({
  DonationEntry: {
    screen: donationEntry,
    navigationOptions: {
      headerShown: false,
    },
  },
  DonationCharityChoose : {
    screen: donationCharityBrief,
    navigationOptions:{
      headerShown: false,
    }
  },
  DonationIndex : {
    screen: donationIndex,
    navigationOptions:{
      headerShown: false,
    }
  },
  CanTeen :{
    screen: donationCanTeen,
    navigationOptions:{
      headerShown: false
    }
  },
  DonationPayment :{
    screen: donationPayment,
    navigationOptions:{
      headerShown: false
    }
  },
  DonationPaymentSuccess : {
    screen: donationPaymentSuccess,
    navigationOptions:{
      headerShown:false
    }
  }

  
});


export default createAppContainer(DonationStack);
