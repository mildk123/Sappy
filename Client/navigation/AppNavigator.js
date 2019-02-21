import React from "react";
import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../Screens/StartScreen";
import AuthLoading from "../Screens/AuthLoading";

import AuthStackNavigator from "../Screens/Auth/index";
import MainTabNavigator from "./MainTabNavigator";


export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  StartScreen: StartScreen,
  Auth: AuthStackNavigator,
  App: MainTabNavigator,
});
