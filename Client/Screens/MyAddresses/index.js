import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { createStackNavigator } from 'react-navigation'

import { Icon, Fab } from "native-base";

import Header from "../../Helper/Header";
import SwipeList from "../../components/SwipeList";
import AddAddress from "./addAddress";

const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

export class MyAddresses extends Component {
  static navigationOptions = {
    header: null,
    drawerLabel: "My Addresses",
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-pin" fontSize={24} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Fab
          containerStyle={{ zIndex: 1909, margin: 10 }}
          style={{ backgroundColor: "red" }}
          position="bottomRight"
          onPress={() => {
            this.props.navigation.navigate("AddAddress");
          }}
        >
          <Icon style={{ color: "white", fontSize: 25 }} name="md-add" />
        </Fab>

        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Addresses"}
          hasTabs={false}
          searchBtn={false}
          favBtn={false}
          threeDots={true}
          {...this.props}
        />

        <SwipeList data={datas} />
      </View>
    );
  }
}

const AddressNavigator = createStackNavigator({
  MyAddresses,
  AddAddress : AddAddress,
});

AddressNavigator.navigationOptions = {
  drawerLabel: "My Addresses",
  drawerIcon: ({ tintColor }) => (
    <Icon name="ios-pin" fontSize={24} style={{ color: tintColor }} />
  )
};

export default AddressNavigator;




const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
