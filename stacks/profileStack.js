// Import detailed donation screens here
import profile1 from '../screens/profile1'
import Investment from "../stacks/investmentStack";
import Donation from "../stacks/donationStack";
import Saving from "../stacks/savingStack";
import AppStack from "../stacks/AppStack";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const ProfileStack = createStackNavigator({

  
    ProfileEntry: {
      screen: profile1,
      navigationOptions:{
        headerTitleAlign: "center",
        headerTitle: "Profile",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#1F4E79",
        },
      }
    },
    Saving: {
      screen: Saving,
      navigationOptions: {
        headerShown: false,
      },
    },
    AppStack:{
      screen:AppStack
    },
    Investment:{
      screen: Investment
    },
    Donation: {
      screen: Donation,
      navigationOptions:{
        headerTitleAlign: "center",
        headerTitle: "Welcome to Donation",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#1F4E79",
        },
        tabBarLabel:'12121212'
      }
    }


});

 

export default createAppContainer(ProfileStack);