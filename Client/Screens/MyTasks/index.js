import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';

import firebase from '../../config'
const database = firebase.database().ref()

const { height } = Dimensions.get("window");

class MyTasks extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }



  static navigationOptions = {
    header: null
  };


  render() {
    const { isLoading, Categories } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            icon={'menu'}
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
          icon={'menu'}
          title={"My Tasks"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />
        <View style={styles.contentDiv}>
          <Text>My Tasks</Text>
        </View>

      </View>
    )
  }
}

MyTasks.navigationOptions = {
  drawerLabel: "My Tasks",
  drawerIcon: ({ tintColor }) => (
    <FontAwesome name="tasks" style={{ color: tintColor, fontSize: 25 }} />
  )
};

export default MyTasks;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentDiv: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  }
});
