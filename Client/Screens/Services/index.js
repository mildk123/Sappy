import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Dimensions } from 'react-native';

import { createStackNavigator } from "react-navigation";

import { Spinner, Item } from 'native-base';
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';
import AddServices from './addServices'

import firebase from '../../config'
const database = firebase.database().ref()
const { height, width } = Dimensions.get("window");

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
          goBack={true}
          title={"My Services"}
          {...this.props}
        />

        {Services.length !== 0 ? (
          <Fragment>
            <Text style={{ padding: 10, fontSize: 30, alignSelf: 'center', color: '#a8a8a8' }}>Services</Text>
            <View style={styles.contentDiv}>

              <Item style={{
                height: height * 0.6,
                flex: 0, flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                borderColor: 'transparent'
              }}>
                {
                  Services.map((item, Index) => {
                    return <Button
                      key={Index}
                      title={item}
                      containerStyle={{
                        padding: 10
                      }}
                      titleStyle={{ color: '#00aeff' }}
                      buttonStyle={{
                        backgroundColor: "#ffffff",
                        borderColor: "#00aeff",
                        borderWidth: 2,
                        padding: width * 0.02,
                        width: 120,
                        borderRadius: 15,
                        elevation: 0
                      }}
                    />
                  })
                }
              </Item>


              <View style={styles.btnDiv}>
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
          </Fragment>

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
    <Icon name="wrench" style={{ color: tintColor, fontSize: 24  }} />
  )
};

export default ServicesStackNavigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentDiv: {
    padding: 15,
    flexDirection: "column",
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
