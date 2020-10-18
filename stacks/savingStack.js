// Import detailed saving screens here
import Saving from "../screens/saving";
import Saving2 from "../screens/Saving2";
import Saving3 from "../screens/Saving3";
import SavingDetail from "../screens/SavingDetails";


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";

const SavingStack = createStackNavigator({

  SavingHome: {
    screen: Saving,
    navigationOptions: {
      headerShown: false,
    },
  },
  Saving2: {
    screen: Saving2,
    navigationOptions: {
      
    },
  },
  Saving3: {
    screen: Saving3,
    navigationOptions: {
      
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SavingDetail: {
    screen: SavingDetail,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Transaction",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  }


});


export default createAppContainer(SavingStack);
