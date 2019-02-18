import React from "react";
import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../Screens/StartScreen";
import AuthLoading from "../Screens/AuthLoading";

import AuthStackNavigator from "../Screens/Auth/index";
import AppDrawerNavigator from "./AppDrawerNavigator";


export default createSwitchNavigator({
  StartScreen: StartScreen,
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});
