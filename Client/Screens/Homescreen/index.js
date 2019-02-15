import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Dimensions } from "react-native";

import Header from "../../Helper/Header";

import { Icon, Fab } from "native-base";

class Homescreen extends Component {
  constructor() {
    super();
    this.state = {}

  }

  static navigationOptions = {
    header: null
  };



  render() {
    return (
      <View style={styles.container}>
        {/* <Fab
          active={this.state.active}
          containerStyle={{ zIndex: 1909, margin: 10 }}
          position="bottomRight"
          onPress={() => { this.props.navigation.navigate('Cart') }}
        >
          <Icon style={{ color: 'white', fontSize: 25 }} name="ios-basket" />
        </Fab> */}

        <Header
          headerColor="#47bc72"
          icon={'menu'}
          title={"Home"}
          hasTabs={true}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />



      </View>
    );
  }
}

const HomeStackNavigator = createStackNavigator({
  Homescreen,
});

HomeStackNavigator.navigationOptions = {
  drawerLabel: "Store",
  drawerIcon: ({ tintColor }) => (
    <Icon name="home" fontSize={24} style={{ color: tintColor }} />
  )
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  sliderWidth: {
    width: Dimensions.get("window").width
  },
  itemWidth: {
    width: Dimensions.get("window").width - 100
  },

  cardMain: {
    borderRadius: 16
  },
  cardBody: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 27,
    height: Dimensions.get("window").height * 0.24
  },
  image: {
    width: 250,
    height: Dimensions.get("window").height * 0.23
  },

  cardFooter: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#C00000"
  },

  title: {
    margin: 5,
    color: "white",
    fontSize: Dimensions.get("window").width * 0.05
  }
});
