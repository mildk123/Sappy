import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Icon } from 'native-base'
import Header from "../../Helper/Header";

export class MyVouchers extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Vouchers",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-gift' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Vouchers"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> MyVouchers </Text>
      </View>
    )
  }
}

export default MyVouchers