import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions, Text, AsyncStorage } from "react-native";

import { createStackNavigator } from "react-navigation";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import Login from './login'
import Signup from './Signup'

import { Facebook, Google } from "expo";
import firebase from 'firebase'

// import firebase from '../../config';
// const database = firebase.database().ref()

const { width } = Dimensions.get("window");



class Authentication extends Component {
  constructor() {
    super();

    this.state = {};
  }
  static navigationOptions = {
    header: null
  };

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        alert('User Signedin')
      } else {
        alert('User not signemd in')
      }
    });
  }

  loginFB = async () => {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "447640099108195",
      { permissions: ["email", "public_profile"] }
    );

    if (type === "success" && token) {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      const response = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      AsyncStorage.setItem("userLoggedIn", response.credential.accessToken);
      AsyncStorage.setItem('userUID', response.user.uid)
      this._pushToDB();
    }
  };

  loginGoogle = async () => {
    console.log('LoginGoogle')
    const result = await Google.logInAsync({
      behavior: 'web',
      scopes: ['profile', 'email'],
      androidCandroidClientIdlientId : '570661165157-lg81b1o5fs4tpu5hgfg1aq8va1qpgf44.apps.googleusercontent.com'
    });

    if (result.type === 'success') {
      this.onSignIn(result)
      return result.accessToken;
    } else {
      return { cancelled: true };
    }

  }

  onSignIn = (googleUser) => {
    console.log('onSign')
    // console.log('Google Auth Response', googleUser);

    // var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    //   unsubscribe();
    //   // Check if we are already signed-in Firebase with the correct user.
    //   if (!this.isUserEqual(googleUser, firebaseUser)) {

    //     const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.idToken, googleUser.accessToken)

    //     firebase.auth().signInWithCredential(credential)
    //       .then(resp => {
    //         console.log(resp)
    //         console.log('User signed in')
    //         this.props.navigation.navigate('App')
    //       })
    //       .catch(err => console.log(111, err))




    //   } else {
    //     console.log('User already signed-in Firebase.');
    //   }
    // });
  }

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }


  // async getUserInfo(accessToken) {
  //   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   });

  //   return await userInfoResponse.json();
  // }

  _pushToDB = async () => {
    firebase.auth().onAuthStateChanged(user => {
      let firebaseUid = user.uid
      if (user) {
        let username = user.providerData[0].displayName;
        let email = user.providerData[0].email;
        let photoURL = user.providerData[0].photoURL;
        let providerId = user.providerData[0].providerId;
        let fbUid = firebaseUid;

        database.child("Users/").child(firebaseUid).set(
          {
            username,
            email,
            photoURL,
            providerId,
            fbUid
          },
          () => {
            this.props.navigation.navigate("App");
          }
        );
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
            onPress={() => this.loginGoogle()}
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
  Signup: Signup,
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'space-between',
    marginTop: 24
  },
  imgContainer: {
    maxHeight: "60%",
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
