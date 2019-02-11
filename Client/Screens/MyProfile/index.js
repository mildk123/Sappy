import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Icon } from 'native-base'
import Header from "../../Helper/Header";
import Card  from '../../components/Card';

export class MyProfile extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: "My Profile",
        drawerIcon: ({ tintColor }) => (
         <Icon name='md-person' fontSize={24} style={{color: tintColor}} />
        )
      };

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"My Profile"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />
          <Card />
      </View>
    )
  }
}

export default MyProfile

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})