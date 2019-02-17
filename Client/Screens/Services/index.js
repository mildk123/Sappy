import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Header from '../../Helper/Header'

class Services extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerColor="#47bc72"
          icon={'menu'}
          title={"My Services"}
          hasTabs={false}
          searchBar={true}
          favBtn={true}
          threeDots={false}
          {...this.props}
        />
        <View>
          <Text>Services </Text>
        </View>
      </View>
    )
  }
}

export default Services;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inputDiv: {
    marginTop: 18,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
