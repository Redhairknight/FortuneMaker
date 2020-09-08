import { createAppContainer } from "react-navigation";

import Saving from "../screens/saving"

import { createStackNavigator } from "react-navigation-stack";

const SavingStack = createStackNavigator({

  SavingHome: {
    screen: Saving,
    navigationOptions: {
      headerShown: false,
    },
  },
  

});


export default createAppContainer(SavingStack);
