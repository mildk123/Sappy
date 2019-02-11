import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import {
  Container,
  Item,
  Input,
  Icon,
  Button,
  Thumbnail,
  Text
} from "native-base";

import Header from "../../Helper/Header";

import { ImagePicker, Permissions } from "expo";

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      productName: null,
      selectedImage: null
    };
  }

  static navigationOptions = {
    header: null,
      drawerLabel: "Product",
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-add' fontSize={24} style={{color : tintColor}}/>
      )
  }

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({
        selectedImage: result.uri
      });
    }
  };

  uploadImage = async () => {
    let productName = this.state.productName;
    let uri = this.state.selectedImage;

    if (productName) {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
          resolve(xhr.response);
        };

        xhr.onerror = function(e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };

        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
      });

       await firebase.storage().ref().child("Products").child(productName).put(blob)
       .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
    })
       .then(downloadURL => {         
        database.child('Products').push({
          ProductName : productName,
          downloadURL : downloadURL
        },()=>{
          this.setState({
            productName : null,
            selectedImage : null
          })
        })
    })
       .catch(err => alert(err))
    }
  }

  render() {
    const { selectedImage } = this.state;
    return (
      <Container>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"Add Products"}
          hasTabs={"false"}
          searchBtn={false}
          favBtn={false}
          threeDots={false}
          {...this.props}
          goBack={false}
        />

        <View style={styles.container}>
          <Item>
            <Icon active name="home" />
            <Input
              value={this.state.productName}
              placeholder="Product Name"
              onChangeText={text => this.setState({ productName: text })}
            />
          </Item>

          <View>
            <Text style={{ margin: 10, fontSize: 22, fontStyle: "italic" }}>
              Picture:
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableHighlight onPress={this.selectImage}>
                <Thumbnail
                  large
                  source={
                    selectedImage
                      ? { uri: selectedImage }
                      : require("../../assets/placeholder/person_place.png")
                  }
                />
              </TouchableHighlight>
            </View>

            <View style={{ padding: 120 }}>
              <Button
                large
                onPress={this.uploadImage}
                style={{
                  alignSelf: "center",
                  borderRadius: 24,
                  width: 124,
                  justifyContent: "center"
                }}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#ffffff"
  }
});
