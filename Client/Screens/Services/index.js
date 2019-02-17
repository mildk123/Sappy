import React, { Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Dimensions } from 'react-native';

import { createStackNavigator } from "react-navigation";

import { Spinner } from 'native-base';
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';
import AddServices from './addServices'

import firebase from '../../config'
const database = firebase.database().ref()
const { height } = Dimensions.get("window");

class Services extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      Services: []
    }

    this.getServices()
  }

  static navigationOptions = {
    header: null
  };

  _onPress = () => {
    this.props.navigation.navigate('AddServices')
  }

  getServices = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let firebaseUID = user.uid

        database.child('Services').child(firebaseUID).on('child_added', (payload) => {
          if (payload.val() !== false) {
            this.setState({
              isLoading: false,
              Services: [...this.state.Services, payload.key]
            })
          } else {
            this.setState({
              isLoading: false
            })
          }

        })
      } else {
        this.props.navigation.navigate('Auth')
      }
    });
  }

  render() {
    const { isLoading, Services } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            icon={'menu'}
            title={"Services"}
            {...this.props}
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
          title={"My Services"}
          {...this.props}
        />

        {Services.length !== 0 ? (
          <View style={styles.contentDiv}>
            <View style={{
              height: height * 0.5, flex: 0, flexWrap: 'wrap', justifyContent: 'space-between', borderColor: 'transparent'
            }} >
              {
                Services.map((item, Index) => {
                  return <Button
                    key={Index}
                    title={item}
                    buttonStyle={{
                      backgroundColor: "#47bc72",
                      width: 70,
                      height: 30,
                      margin: 50,
                      borderColor: "#47bc72",
                      borderWidth: 0,
                      borderRadius: 5,
                      elevation: 0
                    }}
                  />
                })
              }
            </View>

            <View style={{ justifyContent: 'flex-end' }}>
              <Button
                title="Add More..."
                iconRight
                onPress={() => this._onPress()}
                icon={<Icon name="plus" size={15} color="white" />}
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


        )
          : (<View style={styles.contentDiv}>
            <Text>My Services ... Nothing Here</Text>

            <View style={styles.btnDiv}>
              <Button
                title="Add"
                iconRight
                onPress={() => this._onPress()}
                icon={<Icon name="plus" size={15} color="white" />}
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
          )
        }

      </View >
    )
  }
}

const ServicesStackNavigator = createStackNavigator({
  Services,
  AddServices,
});

ServicesStackNavigator.navigationOptions = {
  drawerLabel: "Services",
  drawerIcon: ({ tintColor }) => (
    <Icon name="wrench" fontSize={24} style={{ color: tintColor }} />
  )
};

export default ServicesStackNavigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentDiv: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
