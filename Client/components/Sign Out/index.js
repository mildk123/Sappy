import React, { Component } from 'react'
import { AsyncStorage,  View } from 'react-native'
import { Icon } from 'native-base'

export class SignOut extends Component {
    constructor () {
        super()

        this.SignOut()
    }
    static navigationOptions = {
      header: null,
        drawerLabel: "Log out",
        drawerIcon: ({ tintColor }) => (
          <Icon name='ios-log-out' fontSize={24} style={{color : tintColor}}/>
        )
    }

    SignOut = async () => {
        await AsyncStorage.removeItem('userToken')

        this.props.navigation.navigate("Auth");
    }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default SignOut