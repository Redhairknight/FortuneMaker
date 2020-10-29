import { createAppContainer } from "react-navigation";

import InvestmentEducation from "../screens/investmentEducation";
import Investment from "../screens/investment";
import FinancialNews from "../screens/financialNews";
import Favorite from "../screens/favorite";
import Products from '../screens/products'
import RiskSurvey from '../screens/riskSurvey'
import SurveyCompleted from '../screens/surveyComplete'
import FinancialIndex from '../screens/financialIndex'
import Recommendation from '../screens/investmentRecommendation'
import investmentHot from '../screens/investmentHot'

import transactionHistory from '../screens/transactionHistory'
import { createStackNavigator } from "react-navigation-stack";

const InvestmentStack = createStackNavigator({
  // investment home page


  InvestmentHome: {
    screen: Investment,
    navigationOptions: {
      headerShown: false,
    },
  },
  InvestmentEducationDetail: {
    // investment education screen

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
  // news screen

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

  // product screen
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

  // risk survey screen
  RiskSurvyDetail: {
    screen: RiskSurvey,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Risk Survey",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },

  // survey complete screen
  SurveyCompleted: {
    screen: SurveyCompleted,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Favorite",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },

  // favorite product screen
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

  // stock index screen
  FinancialIndexDetail: {
    screen: FinancialIndex,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Financial Indexes",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },

  // transication history screen
  TransactionHistory: {
    screen: transactionHistory,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "transactionHistory",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },

  // recommendation screen
  InvestmentRecommendation: {
    screen: Recommendation,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Recommendation",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },

  // hot products screen
  InvestmentHot: {
    screen: investmentHot,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Hot",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    }
  },
});


export default createAppContainer(InvestmentStack);
