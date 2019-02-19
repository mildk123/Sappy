import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';

import { Spinnerm, Item } from 'native-base';
import { Container, Content, Footer } from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";

import Header from '../../Helper/Header';

import firebase from '../../config'
const database = firebase.database().ref()

const { height, width } = Dimensions.get("window");

class PostTask extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      Services: [
        {
          thumbnail: require('../../Assets/Post/cleaner.png'),
          name: 'Cleaner'
        },
        {
          thumbnail: require('../../Assets/Post/gardener.png'),
          name: 'Gardener'
        },
        {
          thumbnail: require('../../Assets/Post/electrician.png'),
          name: 'Electrician'
        }, {
          thumbnail: require('../../Assets/Post/tailor.png'),
          name: 'Tailor'
        }, {
          thumbnail: require('../../Assets/Post/deliveryMan.png'),
          name: 'Delivery Man'
        }, {
          thumbnail: require('../../Assets/Post/hairstylist.png'),
          name: 'Hair Stylist'
        }, {
          thumbnail: require('../../Assets/Post/carWasher.png'),
          name: 'Car Washer'
        }, {
          thumbnail: require('../../Assets/Post/handyman.png'),
          name: 'Handyman'
        }, {
          thumbnail: require('../../Assets/Post/ITservices.png'),
          name: 'IT Services'
        }, {
          thumbnail: require('../../Assets/Post/painter.png'),
          name: 'Painter'
        }, {
          thumbnail: require('../../Assets/Post/photographer.png'),
          name: 'Photographer'
        }, {
          thumbnail: require('../../Assets/Post/moving.png'),
          name: 'Moving'
        },
        {
          thumbnail: require('../../Assets/Post/supplier.png'),
          name: 'Supplier'
        },
      ]
    }
  }

  static navigationOptions = {
    header: null
  };


  render() {
    const { isLoading, Services } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
            icon={'menu'}
            title={"Post Task"}
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
          icon={'menu'}
          title={"Post Task"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />
        <View style={styles.contentDiv}>
          <View style={{ alignSelf: 'center' }}>
            <Text>Post Task</Text>
          </View>


          <ScrollView>
            <View style={{height: height,flexWrap: 'wrap', alignSelf: 'center',}}>
              {Services.map((item, Index) => {
                return <TouchableOpacity key={Index}>
                  <Image style={styles.Images} source={item.thumbnail} alt={item.name} />
                  <Text style={{ fontSize: 20, alignSelf: 'center' }}>{item.name}</Text>
                </TouchableOpacity>
              })
              }
            </View>
          </ScrollView>

        </View>

      </View>
    )
  }
}

PostTask.navigationOptions = {
  drawerLabel: "Post Task",
  drawerIcon: ({ tintColor }) => (
    <Icon name="bell-o" style={{ color: tintColor, fontSize: 25 }} />
  )
};

export default PostTask;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentDiv: {
    padding: 15,
    flexDirection: "column",
  },

  Images: {
    marginHorizontal: 25,
    marginTop: 25,
    width: width * 0.2,
    height: height * 0.1,
  }
});
