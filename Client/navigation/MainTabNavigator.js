import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

import Homescreen from "../Screens/Homescreen";
import Inbox from "../Screens/Inbox";
import Post from "../Screens/Homescreen";
import MyTask from "../Screens/Homescreen";
import Settings from "../Screens/Settings";

const HomeStack = createStackNavigator({
  Home: {
    screen: Homescreen
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <Octicons color={tintColor} size={34} name="home" />
    ) : (
      <Octicons color="#b29f94" size={30} name="home" />
    )
};



const InboxStack = createStackNavigator({
  Messages: Messages
});

InboxStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="chat" />
    ) : (
      <MaterialIcons color="#b29f94" size={30} name="chat-bubble-outline" />
    )
};



const PostStack = createStackNavigator({
  Post: Post
});

PostStack.navigationOptions = {
  tabBarLabel: "Post",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialCommunityIcons color={tintColor} size={34} name="plus-box" />
    ) : (
      <MaterialCommunityIcons color="#b29f94" size={30} name="plus-box-outline" />
    )
};



const MyTaskStack = createStackNavigator({
  Cart: Cart
});

MyTask.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialCommunityIcons color={tintColor} size={34} name="cart" />
    ) : (
      <MaterialCommunityIcons color="#b29f94" size={30} name="cart-outline" />
    )
};



const SettingsStack = createStackNavigator({
  Settings: Settings
});

SettingsStack.navigationOptions = {
  tabBarLabel: "SettingsStack",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="person" />
    ) : (
      <MaterialIcons color="#b29f94" size={30} name="person-outline" />
    )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MyTaskStack,
    PostStack,
    InboxStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#ffffff",
      inactiveTintColor: "#DA22FF",
      style: {
        backgroundColor: "#8E54E9" // TabBar background
      }
    }
  }
);
