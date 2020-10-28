// Import detailed saving screens here
import Saving from "../screens/saving";

import SavingDetail from "../screens/SavingDetails";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SavingPie from "../screens/SavingPie";
import SavingGoal from "../screens/SavingGoal";
import SavingSuccess from "../screens/SavingSuccess";

import Investment from "../stacks/investmentStack";
import Donation from "../stacks/donationStack";

import upBankTransaction from "../screens/upBankTransaction";

const SavingStack = createStackNavigator({
  SavingHome: {
    screen: Saving,
    navigationOptions: {
      headerShown: false,
    },
  },
  Investment: {
    screen: Investment,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Investment",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      },
    },
  },
  Donation: {
    screen: Donation,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Welcome to Donation",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      },
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
      },
    },
  },
  SavingPie: {
    screen: SavingPie,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Saving Pie",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      },
    },
  },
  SavingGoal: {
    screen: SavingGoal,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Saving Goal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      },
    },
  },
  SavingSuccess: {
    screen: SavingSuccess,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Saving Goal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      },
    },
  },

  UpBankTransaction: {
    screen: upBankTransaction,
    navigationOptions: {},
  },
});

export default createAppContainer(SavingStack);
