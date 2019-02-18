import React, { Component, Fragment } from "react";
import { SafeAreaView, ScrollView, Dimensions, View, Image, AsyncStorage } from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeStackNavigator from "../Screens/Homescreen";
import Inbox from "../Screens/Inbox";
import Notifications from "../Screens/Notifications";
import ManageSales from "../Screens/ManageSales";
import ServicesStackNavigator from "../Screens/Services";
import MyGigs from "../Screens/MyGigs";
import BuyerRequests from "../Screens/BuyerRequests";
import Settings from "../Screens/Settings";
import Profile from "../Screens/Profile";
import Support from "../Screens/Support";
import AsEmployerNav from "../Screens/ViewAsEmployer";


import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");



class DrawerComponent extends Component {
  constructor(props) {
    super(props)

    this.SignOut = this.SignOut.bind(this)
  }

  SignOut = async () => {
    // await AsyncStorage.removeItem("userLoggedIn");
    await AsyncStorage.removeItem("userLoggedIn");
    AsyncStorage.setItem('userUID')
    AsyncStorage.removeItem("newUser");
    this.props.navigation.navigate("AuthLoading");
  };

  render() {

    return (

      <SafeAreaView style={{ flex: 1 }}>

        {/* Drawer Header //////////////////// */}
        <View
          style={{
            height: 180,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../Assets/icon.png")}
            alt="Header"
            style={{ height: 150, width: 150, padding: 25 }}
          />
        </View>


        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>

        {/* Drawer Content */}
        <View>
          {/* Drawer Footer Buttons //////////// */}
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Button
              buttonStyle={{
                padding: 4,
                // width: 50,
                // borderRadius: 12,
                elevation: 0,
                backgroundColor: "#47bc72"
              }}
              title="Terms & Conditions"
            />

            <Button
              buttonStyle={{
                padding: 5,
                // width: 50,
                // borderRadius: 12,
                elevation: 0,
                backgroundColor: "#47bc72"
              }}
              title="FAQ"
            />
          </View>

          <Button
            onPress={() => { this.SignOut() }}
            buttonStyle={{
              backgroundColor: "red",
              padding: 5,
              width: width * 0.7
            }}
            icon={<Icon name="logout" size={24} style={{ color: "white" }} />}
            title="Logout"
          />

        </View>

      </SafeAreaView>
    )
  }

}

export default createDrawerNavigator(
  {
    HomeStackNavigator,
    Inbox,
    Notifications,
    ServicesStackNavigator,
    // ManageSales,
    // MyGigs,
    BuyerRequests,
    Settings,
    Profile,
    Support,
    AsEmployerNav
  },
  {
    drawerWidth: width * 0.7,

    contentComponent: props => (
      <DrawerComponent {...props} />
    ),
    contentOptions: {
      activeTintColor: "#47bc72",
      activeBackgroundColor: "black"
    }
  }
);
