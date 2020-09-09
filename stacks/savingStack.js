// Import detailed saving screens here
import Saving from "../screens/saving";
import Saving2 from "../screens/Saving2";
import Saving3 from "../screens/Saving3";


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

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



});


export default createAppContainer(SavingStack);
