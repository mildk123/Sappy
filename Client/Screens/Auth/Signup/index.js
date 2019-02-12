import React, { Component } from "react";

import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";


export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    };
  }
  static navigationOptions = {
    title: "Create Account",
    headerStyle: {
      backgroundColor: "#47bc72"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onPress = async () => {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let password = this.state.password;

    if ((firstName && lastName && email && password) !== null) {
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(success => {
      //     let email = success.user.email;
      //     let uid = success.user.uid;
      //     database.child("users").push({
      //       firstName: firstName,
      //       lastName: lastName,
      //       email: email,
      //       uid: uid
      //     });
      //   AsyncStorage.setItem("userLoggedIn", "SignedUp");
      //   this.props.navigation.navigate("App");
      // })
      // .catch(error => {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   alert(errorCode, errorMessage);
      // });
    } else {
      alert(`please enter correct information`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input
            labelStyle={{
              margin: 7,
              fontSize: 22,
              color: "#47bc72",
            }}
            label="~ First Name"
            onChangeText={firstName => {
              this.setState({ firstName: firstName });
            }}
            placeholder="Abdullah"
            leftIcon={<Icon size={20} name="user" />}
          />
          <Input
            labelStyle={{
              margin: 7,
              fontSize: 22,
              color: "#47bc72",
            }}
            label="~ Last Name"
            onChangeText={lastName => {
              this.setState({ lastName: lastName });
            }}
            placeholder="Khan"
            leftIcon={<Icon size={20} name="user" />}
          />
          <Input
            label="~ Email"
            labelStyle={{
              margin: 7,
              fontSize: 22,
              color: "#47bc72",
            }}
            placeholder="abec@domain.com"
            onChangeText={email => {
              this.setState({ email: email });
            }}
            leftIcon={<Icon size={20} name="mail" />}
          />
          <Input
            labelStyle={{
              margin: 7,
              fontSize: 22,
              color: "#47bc72",
            }}
            label="~ Password"
            placeholder="********"
            onChangeText={password => {
              this.setState({ password: password });
            }}
            leftIcon={<Icon size={20} name="lock" />}
          />
        </View>

        <View style={styles.btnDiv}>
          <Button
            title="Done"
            iconRight
            onPress={() => this._onPress()}
            icon={<Icon name="check" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#47bc72",
              width: 150,
              height: 55,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              elevation: 0
            }}
          />
        </View>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputDiv: {
    marginTop: 18,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
