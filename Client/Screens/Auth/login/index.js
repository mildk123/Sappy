import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage, ScrollView } from "react-native";


import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";


import firebase from '../../../config';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#47bc72"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onPress = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert('Please Enter Email/Password')
    } else {
      this.setState({
        isLoading: true
      })
      if ((email && password) !== null) {
        // fetch('https://sappy125.herokuapp.com/auth/login', {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json"
        //   },
        //   body: JSON.stringify({ email, password })
        // })
        //   .then(res => res.json())
        //   .then(res => {
        //     let resolve = res.match
        //     if (resolve) {
        //       AsyncStorage.setItem(res.token, 'userLoggedIn')

        //       this.props.navigation.navigate('App')
        //     } else {
        //       alert(res.message)
        //     }
        //   })
        //   .catch(err => alert(err.message))

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            let uid = res.user.uid
            AsyncStorage.setItem("userLoggedIn", 'true');
            AsyncStorage.setItem('userToken', res.user.refreshToken)
            AsyncStorage.setItem('userUID', uid)

            this.props.navigation.navigate('AuthLoading')
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage)

            // ...
          });
      } else {
        alert(`please enter correct information`);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inputDiv}>
            <Input
              label="~ Email"
              keyboardType="email-address"
              labelStyle={{
                margin: 7,
                fontSize: 22,
                color: "#47bc72",
              }}
              onChangeText={email => {
                this.setState({ email: email });
              }}
              placeholder="abc@domain.com"
              leftIcon={<Icon size={20} name="envelope-o" />}
            />

            <Input
              label="~ Password"

              labelStyle={{
                margin: 17,
                fontSize: 22,
                color: "#47bc72",
              }}
              onChangeText={password => {
                this.setState({ password: password });
              }}
              placeholder="********"
              leftIcon={<Icon size={20} name="lock" />}
            />

          </View>

          <View style={styles.btnDiv}>
            <Button
              title="Done"
              iconRight
              onPress={() => this._onPress()}
              icon={<Icon name="chevron-right" size={15} color="white" />}
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

export default SignIn;

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
