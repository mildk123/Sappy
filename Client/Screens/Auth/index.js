import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { createStackNavigator } from "react-navigation";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";

import Login from './login'
import Signup from './Signup'


class Authentication extends Component {
  constructor() {
    super();
    
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };
  
  // const database = firebase.database().ref();
  // _toHomePage = async () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       let username = user.displayName;
  //       let email = user.email;
  //       let photoURL = user.photoURL;
  //       let uid = user.uid;

  //       database.child("users/" + uid).set(
  //         {
  //           username,
  //           email,
  //           photoURL,
  //           uid
  //         },
  //         () => {
  //           this.props.navigation.navigate("App");
  //         }
  //       );
  //     }
  //   });
  // };

 


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.picSize}
            source={require("../../assets/icon.png")}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            icon={<Icon name="user" size={23} color="white" />}
            buttonStyle={{
              backgroundColor: "#E22929",
              width: 220,
              padding: 10,
              // height: 55,
              // borderColor: "transparent",
              // borderWidth: 0,
              // borderRadius: 5
            }}
          />
           <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            title="Create Account"
            iconRight
            icon={<Icon name="adduser" size={23} color="white" />}
            buttonStyle={{
              backgroundColor: "#E79E2F",
              width: 220,
              padding: 10,
              // height: 55,
              // borderColor: "transparent",
              // borderWidth: 0,
              // borderRadius: 5
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
  Signup : Signup
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'space-between'
  },
  imgContainer: {
    maxHeight: "100%",
    padding: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  picSize: {
    maxHeight: 360,
    maxWidth: 360
  },
  btnContainer: {
    // height: 150,
    // padding: 25,
    flexDirection: "row",
    justifyContent: 'space-around' ,
    // alignContent: 'flex-start'
  }
});
