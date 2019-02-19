import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import { Spinner } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';


import NoTasks from '../../Assets/MyTasks/noTask.png'
import { Button } from 'react-native-elements';

import firebase from '../../config'
const database = firebase.database().ref()

const { height, width } = Dimensions.get("window");

class MyTasks extends Component {
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

          <View>
            <Text style={{ fontSize: 25, fontStyle: 'italic' }}>My Tasks</Text>
          </View>

          <View style={{
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Image style={{ width: width, height: height * 0.5 }} source={require('../../Assets/MyTasks/noTask.png')} alt="No Tasks" />
          </View>

          <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
          }}>
            <Button
              title="Post a task"
              onPress={() => this.props.navigation.navigate('PostStack')}
              titleStyle={{
                color: '#ffffff'
              }}
              containerStyle={{ padding: 25 }}
              buttonStyle={{
                backgroundColor: '#00A84A',
                // borderColor: '#00A84A',
                // borderWidth: 0,
                width: width * 0.35,
                padding: 5,
                borderRadius: 5,
                elevation: 0
              }}
            />
          </View>

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
    backgroundColor: "#ECF0F3",
  },
  contentDiv: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  }
});
