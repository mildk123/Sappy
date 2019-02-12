import React from "react";
import {SafeAreaView,ScrollView,Dimensions,View,Image,AsyncStorage} from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeStackNavigator from "../Screens/Homescreen";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

SignOut = async () => {
  await AsyncStorage.removeItem("userLoggedIn");

  this.props.navigation.navigate("Auth");
};

export default createDrawerNavigator(
  {
    HomeStackNavigator,
  },
  {
    drawerWidth: width * 0.6,
    contentComponent: props => (
      <SafeAreaView style={{ flex: 1 }}>
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
          <DrawerItems {...props} />
        </ScrollView>

        <View>
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
                backgroundColor: "#eaa352"
              }}
              title="Terms & Conditions"
            />

            <Button
              buttonStyle={{
                padding: 12,
                width: width * 0.25,
                borderRadius: 12,
                elevation: 0,
                backgroundColor: "#eaa352"
              }}
              title="FAQ"
            />
          </View>

          <Button
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
    ),
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "black"
    }
  }
);
