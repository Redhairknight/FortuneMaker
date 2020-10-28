// Import detailed saving screens here
import Saving from "../screens/saving";
import SavingDetail from "../screens/SavingDetails";
import LoginScreen from "../screens/LoginScreen";
import SavingPie from "../screens/SavingPie";
import SavingGoal from "../screens/SavingGoal";
import SavingSuccess from "../screens/SavingSuccess";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const SavingStack = createStackNavigator({
  // the starter page of the stack
  SavingHome: {
    screen: Saving,
    navigationOptions: {
      headerShown: false,
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
    }
  },
  SavingGoal: {
    screen: SavingGoal,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Saving Goal",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
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
    }
  },
}
);


export default createAppContainer(SavingStack);
