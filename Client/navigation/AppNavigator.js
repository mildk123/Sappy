import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthLoading from "../Screens/AuthLoading";

import AuthStackNavigator from "../Screens/Auth/index";
import AppDrawerNavigator from "./AppDrawerNavigator";

import More from '../Screens/More'

export default createSwitchNavigator({
  More: More,
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});
