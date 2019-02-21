import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import AuthLoading from '../Screens/AuthLoading'

import Homescreen from "../Screens/Homescreen";
import Inbox from "../Screens/Inbox";

import PostTask from "../Screens/Post";
import Detail from '../Screens/Post/Detail'
import Location from '../Screens/Post/Location'
import Budget from '../Screens/Post/Budget'

import MyTasks from "../Screens/MyTasks";

import Settings from "../Screens/Settings";
import SetProfile from '../Screens/Settings/Profile'
import SetLocation from '../Screens/Settings/Location'


const HomeStack = createStackNavigator({
  Home: {
    screen: Homescreen,
  }
}, { headerMode: 'none' });

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <AntDesign color={tintColor} size={34} name="home" />
    ) : (
        <AntDesign color="#000000" size={30} name="home" />
      )
};


const InboxStack = createStackNavigator({
  Inbox: Inbox
}, { headerMode: 'none' });

InboxStack.navigationOptions = {
  tabBarLabel: "Messages",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="chat" />
    ) : (
        <MaterialIcons color="#000000" size={30} name="chat-bubble-outline" />
      )
};



const PostStack = createStackNavigator({
  Location,
  PostTask,
  Detail,
  Budget,
}, { headerMode: 'none' });

PostStack.navigationOptions = {
  tabBarLabel: "Post",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <MaterialCommunityIcons color={tintColor} size={34} name="plus-box" />
    ) : (
        <MaterialCommunityIcons color="#000000" size={30} name="plus-box-outline" />
      )
};



const MyTasksStack = createStackNavigator({
  MyTasks: MyTasks
}, { headerMode: 'none' });

MyTasksStack.navigationOptions = {
  tabBarLabel: "My Task",
  tabBarIcon: ({ tintColor, focused }) =>
    focused ? (
      <Octicons color={tintColor} size={34} name="tasklist" />
    ) : (
        <Octicons color="#000000" size={30} name="tasklist" />
      )
};



const SettingsStack = createStackNavigator({
  Settings: Settings,
  AuthLoading: AuthLoading,
  SetLocation : SetLocation,
  SetProfile : SetProfile

}, { headerMode: 'none' });

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ tintColor, focused, inactiveTintColor }) =>
    focused ? (
      <MaterialIcons color={tintColor} size={34} name="person" />
    ) : (
        <MaterialIcons color="#000000" size={30} name="person-outline" />
      )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MyTasksStack,
    PostStack,
    InboxStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#47bc72",
      inactiveTintColor: "#000000",
      style: {
        backgroundColor: "#ffffff", // TabBar background
        padding: 2
      }
    }
  }
);
