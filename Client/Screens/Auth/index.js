import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions, Text, AsyncStorage } from "react-native";

import { createStackNavigator } from "react-navigation";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import Login from './login'
import Signup from './Signup'


import { Facebook } from "expo";
import firebase from '../../config';

const { width } = Dimensions.get("window");



class Authentication extends Component {
  constructor() {
    super();

    this.state = {};
  }
  static navigationOptions = {
    header: null
  };

  loginFB = async () => {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "447640099108195",
      { permissions: ["public_profile"] }
    );

    if (type === "success" && token) {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      const response = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      console.log(response.credential.accessToken)
      // AsyncStorage.setItem("userLoggedIn", response.credential.accessToken);
      this.toHomePage();
    }
  };

  toHomePage = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let username = user.displayName;
        let email = user.email;
        let photoURL = user.photoURL;
        let uid = user.uid;

        // database.child("users/" + uid).set(
        //   {
        //     username,
        //     email,
        //     photoURL,
        //     uid
        //   },
        //   () => {
        this.props.navigation.navigate("App");
        // }
        // );
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.picSize}
            source={require('../../Assets/icon.png')}
          />
          <Text>Sappy</Text>
        </View>

        <View style={styles.socialContainer}>
          <Button
            title="Google"
            icon={<Icon name='google' size={23} color="red" />}
            titleStyle={{
              color: 'red'
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderColor: 'red',
              borderWidth: 1,
              width: width * 0.3,
              padding: 5,
              borderRadius: 25,
              elevation: 0
            }}
          />
          <Button
            title="Facebook"
            onPress={() => this.loginFB()}
            icon={<Icon name='facebook-square' size={23} color="#4267B0" />}
            titleStyle={{
              color: '#4267B0'
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderColor: '#4267B0',
              borderWidth: 1,
              width: width * 0.35,
              padding: 5,
              borderRadius: 25,
              elevation: 0
            }}
          />


        </View>

        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            iconRight
            icon={<IconMaterial name="login" size={23} color="white" />}
            buttonStyle={{
              backgroundColor: "#47bc72",
              width: width * 0.5,
              padding: 7,
            }}
          />

          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            title="Create Account"
            iconRight
            icon={<Icon name="adduser" size={23} color="white" />}
            buttonStyle={{
              backgroundColor: "#47bc72",
              width: width * 0.5,
              padding: 7,
            }}
          />


        </View>
      </View>
    );
  }
}

export default (AuthStackNavigator = createStackNavigator({
  Auth: Authentication,
  Login: Login,
  Signup: Signup
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'space-between'
  },
  imgContainer: {
    maxHeight: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  picSize: {
    maxHeight: width * 0.6,
    maxWidth: width * 0.6
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
  }
});
