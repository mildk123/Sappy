import React, { Component, Fragment } from "react";
import { SafeAreaView, ScrollView, Dimensions, View, Image, AsyncStorage } from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeStackNavigator from "../Screens/Homescreen";
import Services from "../Screens/Homescreen";
import Settings from "../Screens/Homescreen";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");



class DrawerComponent extends Component {
  constructor(props) {
    super(props)

    console.log('con props', props)
  }

  SignOut = async (props) => {
    console.log(props)
    // await AsyncStorage.removeItem("userLoggedIn");
    await AsyncStorage.removeItem("userLoggedIn");

    props.navigation.navigate("AuthLoading");
  };

  render() {

    console.log('12312')
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


        {/* <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView> */}

        {/* Drawer Content */}
        <View>

          {/* Drawer Footer Buttons //////////// */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10
            }}
          >
            <Button
              buttonStyle={{
                padding: 4,
                width: width * 0.25,
                borderRadius: 12,
                elevation: 0,
                backgroundColor: "#47bc72"
              }}
              title="Terms & Conditions"
            />

            <Button
              buttonStyle={{
                padding: 12,
                width: width * 0.25,
                borderRadius: 12,
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
              padding: 8,
              width: width * 0.6
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
    Services,
    Settings
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
