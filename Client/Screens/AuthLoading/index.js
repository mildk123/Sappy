import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

export class AuthLoading extends Component {
  constructor() {
    super();

    this._loadApp();
  }

  _loadApp = async () => {
    const firstScreen = await AsyncStorage.getItem('completeStart')
    const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");

    if (firstScreen) {
      await this.props.navigation.navigate(userLoggedIn ? "App" : "Auth");

    } else {
      await this.props.navigation.navigate('StartScreen');
    }

  };
  

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24
  }
});
