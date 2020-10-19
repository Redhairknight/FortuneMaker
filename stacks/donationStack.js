// Import detailed donation screens here
import donationIndex from "../screens/donationIndex";
import donationPayment from "../screens/donationPayment";
import donationPaymentSuccess from "../screens/donationPaymentSuccess";
import donationCharityBrief from "../screens/donationCharityBrief";
import donationCharityCanTeen from "../screens/donationCharityCanTeen"


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
    navigationOptions: {},
      
    },
  DonationCharityBrief: {
    screen: donationCharityBrief,
    navigationOptions: {},
      
    },
    DonationCharityCanTeen: {
      screen: donationCharityCanTeen,
      navigationOptions: {},
        
      },
  



});


export default createAppContainer(DonationStack);
