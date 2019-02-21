import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, AsyncStorage } from 'react-native';

import { Spinner } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';

import { Button } from 'react-native-elements';

import firebase from '../../config'
const database = firebase.database().ref()

const { height, width } = Dimensions.get("window");

class Inbox extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      userLoggedIn: false
    }
  }

  componentDidMount = async () => {
    let userLoggedInToken = await await AsyncStorage.getItem('userLoggedIn');
    if (userLoggedInToken === 'true') {
      this.setState({
        userLoggedIn: true,
      })
      return userLoggedInToken

    } else {
      this.setState({
        userLoggedIn: false,
      })
      return userLoggedInToken
    }
  }



  static navigationOptions = {
    header: null
  };


  render() {
    const { isLoading, userLoggedIn } = this.state;
    if (isLoading === true) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            title={"Inbox"}
            hasTabs={false}
            searchBar={false}
            favBtn={false}
            threeDots={false}
          />
          <View style={styles.contentDiv}>
            <Spinner color='green' />
          </View>
        </View>
      )
    }

    if (userLoggedIn === false) {
      return (<View style={styles.container}>
        <Header
          headerColor="#47bc72"
          title={"Inbox"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />
        <View style={{
          padding: 20,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}>
          <Text>You need to login first</Text>
        </View>
      </View>)
    } else {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            title={"Inbox"}
            hasTabs={false}
            searchBar={false}
            favBtn={false}
            threeDots={false}
          />

          <View style={styles.contentDiv}>

            <View style={{
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Image
                style={{ width: width * 0.5, height: height * 0.3 }}
                source={require('../../Assets/Inbox/empty.png')} alt="No Tasks" />
            </View>

          </View>

          <View style={{
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text>
              You haven't got any messages yet
          </Text>
          </View>

        </View>
      )
    }
  }
}


export default Inbox;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
  },
  contentDiv: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  }
});
