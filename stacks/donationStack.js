// Import detailed donation screens here
import donationIndex from "../screens/donationIndex";
import donationPayment from "../screens/donationPayment";
import donationPaymentSuccess from "../screens/donationPaymentSuccess";


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const DonationStack = createStackNavigator({

  DonationHome: {
    screen: donationIndex,
    navigationOptions: {
      headerShown: false,
    },
  },
  DonationPayment: {
    screen: donationPayment,
    navigationOptions: {
      
    },
  },
  DonationPaymentSuccess: {
    screen: donationPaymentSuccess,
    navigationOptions: {
      
    },
  },



});


export default createAppContainer(DonationStack);
