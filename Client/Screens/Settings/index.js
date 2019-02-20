import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Content, ListItem, Icon, Left, Body, Button, Spinner } from 'native-base';
import { createStackNavigator } from 'react-navigation'

import Header from '../../Helper/Header';
import Location from './Location'

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
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
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
          
          title={"Settings"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />

        <Content style={{ marginTop: 10 }}>
          <ListItem icon style={{ marginVertical: 5 }} onPress={() => { this.props.navigation.navigate('Location') }} >
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


const SettingsStackNavigator = createStackNavigator({
  Settings,
  Location
});

SettingsStackNavigator.navigationOptions = {
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }) => (
    <Icon name="gear" type='FontAwesome' style={{ color: tintColor, fontSize: 25 }} />
  )
};

export default SettingsStackNavigator;


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
