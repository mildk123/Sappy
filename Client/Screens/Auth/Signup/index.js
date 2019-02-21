import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { Input, Button } from "react-native-elements";


import firebase from '../../../config';
const database = firebase.database().ref()

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
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

  _onPress = () => {
    const { fname, lname, email, password } = this.state;

    if (!fname || !lname || !email || !password) {
      alert(`please enter correct information`);

    } else {
      // fetch('https://sappy125.herokuapp.com/auth/register', {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify({ fname, lname, email, password })
      // })
      //   .then(res => res.json())
      //   .then(res => {
      //     let resolve = res.match
      //     if (resolve) {
      //       AsyncStorage.setItem('userLoggedIn', res.token)
      //       AsyncStorage.setItem('newUser', 'true')
      //       this.props.navigation.navigate('App')
      //     } else {
      //       alert(res.message)
      //     }
      //   })
      //   .catch(err => alert(err.message))

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          let firebaseUid = res.user.uid

          database.child("Users/").child(firebaseUid).set({
            email,
            username: `${fname} ${lname}`,
            photoURL: 'Placeholder',
            providerId: 'Authentication',
            fbUi: firebaseUid,
          }
          )
          AsyncStorage.setItem('userLoggedIn', res.user.refreshToken)
          AsyncStorage.setItem('userUID', firebaseUid)
          AsyncStorage.setItem('newUser', 'true')

          this.props.navigation.navigate("AuthLoading");
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage)
          // ...
        })

    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView>
          <View style={styles.inputDiv}>
            <Input
              labelStyle={{
                margin: 7,
                fontSize: 22,
                color: "#47bc72",
              }}
              label="~ First Name"
              onChangeText={fname => {
                this.setState({ fname: fname });
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
              onChangeText={lname => {
                this.setState({ lname: lname });
              }}
              placeholder="Khan"
              leftIcon={<Icon size={20} name="user" />}
            />
            <Input
              keyboardType="email-address"
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
              keyboardType="visible-password"
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
        </ScrollView>
      </View>
    );
  }
}



export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
