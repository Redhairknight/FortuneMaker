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
  },
  AKF : {
    screen: donationAKF,
    navigationOptions:{
      headerShown:false
    }
  },
  CareFlight : {
    screen: donationCareFlight,
    navigationOptions:{
      headerShown:false
    }
  },
  FlyingDoctor : {
    screen: donationFlyingDoctor,
    navigationOptions:{
      headerShown:false
    }
  },
  Fred : {
    screen: donationFred,
    navigationOptions:{
      headerShown:false
    }
  },
  GuideDogs : {
    screen: donationGuideDogs,
    navigationOptions:{
      headerShown:false
    }
  },

  
});


export default createAppContainer(DonationStack);
