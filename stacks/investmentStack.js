import { createAppContainer } from "react-navigation";

import InvestmentEducation from "../screens/investmentEducation";
import Investment from "../screens/investment";
import FinancialNews from "../screens/financialNews";
import Favorite from "../screens/favorite";
import Products from '../screens/products'

import { createStackNavigator } from "react-navigation-stack";

const InvestmentStack = createStackNavigator({

  InvestmentHome: {
    screen: Investment,
    navigationOptions: {
      headerShown: false,
    },
  },
  InvestmentEducationDetail: {
    screen: InvestmentEducation,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Investment Education",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },
  FinancialNewsDetail: {
    screen: FinancialNews,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Financial News",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },
  
  ProductsDetail: {
    screen: Products,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Products",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },
  FavoriteDetail: {
    screen: Favorite,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Favorite",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },


});


export default createAppContainer(InvestmentStack);
