import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import TabNavigator from '../../navigation/MainTabNavigator'
import {Icon} from 'native-base'
export class AsEmployer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <TabNavigator />
    )
  }
}

const AsEmployerNav = createStackNavigator({
  AsEmployer,
});

AsEmployerNav.navigationOptions = {
  header : null,
  drawerLabel: "View As Buyer",
  drawerIcon: ({ tintColor }) => (
    <Icon name='person' fontSize={24} style={{ color: tintColor }} />
  )
};

export default AsEmployerNav;
