import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight, Image, Dimensions } from "react-native";

import {
    Container,
    Item,
    Input,
    Icon,
    Button,
    Thumbnail,
    Text,
    Row
} from "native-base";

import Header from "../../Helper/Header";
const { width } = Dimensions.get("window");

import { ImagePicker, Permissions } from "expo";
import placeholder from '../../Assets/place.png'

class More extends Component {
    constructor() {
        super();
        this.state = {
            productName: null,
        };
    }

    static navigationOptions = {
        header: null,
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

                xhr.onload = function () {
                    resolve(xhr.response);
                };

                xhr.onerror = function (e) {
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
                        ProductName: productName,
                        downloadURL: downloadURL
                    }, () => {
                        this.setState({
                            productName: null,
                            selectedImage: null
                        })
                    })
                })
                .catch(err => alert(err))
        }
    }

    render() {
        const { selectedImage } = this.state;
        return (
            <Container style={{ flex: 1 }}>

                <Header
                    headerColor="#47bc72"
                    icon={"account-circle"}
                    title={"About me"}
                    hasTabs={"false"}
                    searchBtn={false}
                    favBtn={false}
                    threeDots={false}
                    goBack={false}
                    {...this.props}
                />


                <View style={styles.inputCont} >
                    <Item>
                        <Icon active name='home' type='FontAwesome' style={{ fontSize: 30, margin: 5 }} />
                        <Input
                            value={this.state.productName}
                            placeholder="Phone Number"
                            onChangeText={text => this.setState({ productName: text })}
                        />
                    </Item>
                </View>

                <View style={{ height: width, alignItems: 'center', justifyContent: 'space-between' }}>


                    {/* <Image
                        source={placeholder}
                        alt="placeholder"
                        style={{ height: 300, width: 300, padding: 15 }}
                    /> */}

                    <TouchableHighlight onPress={this.selectImage}>
                        <Thumbnail
                            large
                            source={
                                // !selectedImage
                                    // ? { uri: selectedImage }
                                    // :
                                <Image
                                    source={placeholder}
                                    alt="placeholder"
                                    style={{ height: 300, width: 300, padding: 15 }}
                                />
                            }
                        />
                    </TouchableHighlight>

                    <View style={{ alignContent: 'center' }}>
                        <Button
                            onPress={this.uploadImage}
                            style={{
                                backgroundColor: '#47bc72',
                                borderRadius: 10,
                                justifyContent: "center"
                            }}
                        >
                            <Text>Next</Text>
                        </Button>
                    </View>



                </View>

            </Container>
        );
    }
}

export default More;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    inputCont: {
        padding: 25,
    }
});