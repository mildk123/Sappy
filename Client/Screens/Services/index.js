import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createStackNavigator } from "react-navigation";

import { Spinner } from 'native-base';
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';
import AddServices from './addServices'

class Services extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      data: null
    }
  }

  static navigationOptions = {
    header: null
  };

  _onPress = () => {
    this.props.navigation.navigate('AddServices')
  }

  render() {
    const { isLoading, data } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            icon={'menu'}
            title={"My Services"}
            hasTabs={false}
            searchBar={true}
            favBtn={false}
            threeDots={false}
            searchBar={false}
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
          hasTabs={false}
          searchBar={true}
          favBtn={false}
          threeDots={false}
          searchBar={false}
          {...this.props}
        />
        {data ? (
          <View style={styles.contentDiv}>
            {data.map((item, Index) => {
              return <Text>{item}</Text>
            })}
          </View>
        )
          : (
            <View style={styles.contentDiv}>
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
  AddServices
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
    marginTop: 18,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
