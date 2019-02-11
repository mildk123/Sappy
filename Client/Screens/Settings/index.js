import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'
import Header from "../../Helper/Header";

export class Settings extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-settings' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"Settings"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> Settings </Text>
      </View>
    )
  }
}

export default Settings