import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

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
    }
  }



  static navigationOptions = {
    header: null
  };


  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            title={"My Tasks"}
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
            backgroundColor: 'red',
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

Inbox.navigationOptions = {
  drawerLabel: "My Tasks",
  drawerIcon: ({ tintColor }) => (
    <FontAwesome name="tasks" style={{ color: tintColor, fontSize: 25 }} />
  )
};

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
