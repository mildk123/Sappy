import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';

import Header from '../../Helper/Header';
import { Spinner } from 'native-base';
// import Icon from "react-native-vector-icons/FontAwesome";


const { height, width } = Dimensions.get("window");

class PostTask extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      userLoggedIn: false,
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

  componentDidMount = async () => {
    let userLoggedInToken = await await AsyncStorage.getItem('userLoggedIn');

    if (userLoggedInToken === 'true') {
      this.setState({
        userLoggedIn: true,
      })
      return userLoggedInToken

    } else {
      this.setState({
        userLoggedIn: false,
      })
      return userLoggedInToken
    }
  }


  static navigationOptions = {
    header: null
  };

  _ServiceType = (serviceType) => {
    this.props.navigation.navigate('Detail', { serviceType: serviceType })
  }

  render() {
    const { isLoading, Services, userLoggedIn } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"
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

    if (userLoggedIn === false) {
      return (<View style={styles.container}>
        <Header
          headerColor="#47bc72"
          title={"Post Task"}
          hasTabs={false}
          searchBar={false}
          favBtn={false}
          threeDots={false}
        />
        <View style={{
          padding: 20,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}>
          <Text>You need to login first</Text>
        </View>
      </View>)
    } else {
      return (
        <View style={styles.container}>
          <Header
            headerColor="#47bc72"

            title={"Post Task"}
            {...this.props}
          />

          <View style={styles.contentDiv}>

            <ScrollView>
              <View style={{ height: height, flexWrap: 'wrap', justifyContent: 'flex-start', alignSelf: 'center' }}>
                {Services.map((item, Index) => {
                  return <TouchableOpacity key={Index} onPress={() => this._ServiceType(item.name)}>
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
}


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
