import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView , AsyncStorage } from 'react-native';

import { List, ListItem, Icon, Left, Right, Switch } from 'native-base';
import { Button } from "react-native-elements";
import Header from '../../Helper/Header';

import firebase from '../../config'



const { height, width } = Dimensions.get("window");

class Settings extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
    }
  }


  SignOut = () => {
    // await AsyncStorage.removeItem("userLoggedIn");
    AsyncStorage.removeItem("userLoggedIn");
    AsyncStorage.setItem('userUID')
    AsyncStorage.removeItem("newUser");
    this.props.navigation.navigate("AuthLoading");
  };

  static navigationOptions = {
    header: null
  };


  render() {
    console.log(this.props)
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            title={"Settings"}
            hasTabs={false}
            searchBar={false}
            favBtn={false}
            threeDots={false}
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

          title={"Settings"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />


        {/* NON USER ///////////////////////// */}

        <ScrollView>

          <List>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>About us</Text>
              </Left>
              <Right>
                <Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('SetLocation')}>
              <Left>
                <Text>Change Location</Text>
              </Left>
              <Right>
                <Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Language</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Community Guidelines</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Terms and Conditions</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Privacy Policy</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>


            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Contact us</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>


            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Login</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>

            <ListItem onPress={() => alert('button')}>
              <Left>
                <Text>Signup</Text>
              </Left>
              <Right><Icon type='MaterialCommunityIcons' name="arrow-right" />
              </Right>
            </ListItem>
          </List>

          <View style={styles.socialContainer}>

            <Button
              title="Sign out"
              onPress={() => this.SignOut()}
              icon={<Icon type='MaterialCommunityIcons' name="logout" style={{ color: 'white', fontSize: 16 }} />}
              titleStyle={{
                color: 'white'
              }}
              buttonStyle={{
                backgroundColor: 'red',
                width: width * 0.4,
                padding: 1,
                borderRadius: 10,
                elevation: 0
              }}
            />

            <Button
              title="Delete Account"
              onPress={() => alert('Not Yet Complete')}
              icon={<Icon type='FontAwesome' name='trash-o' style={{ color: 'white', fontSize: 16 }} />}
              titleStyle={{
                color: 'white'
              }}
              buttonStyle={{
                backgroundColor: 'red',
                width: width * 0.4,
                padding: 1,
                borderRadius: 10,
                elevation: 0
              }}
            />


          </View>

        </ScrollView>

      </View>
    )
  }
}

export default Settings;


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
  socialContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },
});
