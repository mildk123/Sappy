import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from "../../Helper/Header";

import { Icon } from 'native-base'

export class MyOrders extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Orders",
        drawerIcon: ({ tintColor }) => (
         <Icon name='ios-checkbox-outline' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Orders"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
        <Text> MyOrders </Text>
      </View>
    )
  }
}

export default MyOrders