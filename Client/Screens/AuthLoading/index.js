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
    const userLoggedIn = await AsyncStorage.getItem("userLoggedIn");
    this.props.navigation.navigate(userLoggedIn ? "App" : "Auth");
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
