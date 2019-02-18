import React from "react";
import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../Screens/StartScreen";
import AuthLoading from "../Screens/AuthLoading";

import AuthStackNavigator from "../Screens/Auth/index";
import MainTabNavigator from "./MainTabNavigator";


export default createSwitchNavigator({
  StartScreen: StartScreen,
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: MainTabNavigator,
});
