import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';
import { Content, List, ListItem, Icon, Left, Body, Right, Switch, Button } from 'native-base';

import Header from '../../Helper/Header';

import firebase from '../../config'
const database = firebase.database().ref()

const { height } = Dimensions.get("window");

class Settings extends Component {
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
            title={"Settings"}
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
          title={"Settings"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />

        <Content style={{marginTop: 10}}>
          <ListItem icon style={{marginVertical: 5 }} >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name='map-marker' type='FontAwesome' style={{ fontSize: 20 }} />
              </Button>
            </Left>
            <Body>
              <Text>Change My Location</Text>
            </Body>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name='arrow-right-bold-circle-outline' type='MaterialCommunityIcons' style={{ fontSize: 24 }} />
            </Button>
          </ListItem>

          <ListItem icon >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name='map-marker' type='FontAwesome' style={{ fontSize: 20 }} />
              </Button>
            </Left>
            <Body>
              <Text>Change My Location</Text>
            </Body>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name='arrow-right-bold-circle-outline' type='MaterialCommunityIcons' style={{ fontSize: 24 }} />
            </Button>
          </ListItem>

        </Content>


      </View>
    )
  }
}

Settings.navigationOptions = {
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }) => (
    <Icon name="gear" type='FontAwesome' style={{ color: tintColor, fontSize: 25 }} />
  )
};

export default Settings;


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
