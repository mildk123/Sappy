import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight, Image, Dimensions, AsyncStorage } from "react-native";

import {
    Container,
    Item,
    Input,
    Button,
    Text,
} from "native-base";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../../../Helper/Header";
import { ImagePicker, Permissions } from "expo";
import placeholder from '../../Assets/place.png'

import firebase from '../../config'
const database = firebase.database().ref()

const { width } = Dimensions.get("window");

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            // phone: null,
            // selectedImage: null
        };
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let MyUid = user.uid
                database.child('Users').child(MyUid).once('value', (payload) => {
                    this.setState({
                        selectedImage: payload.val().photoURL
                    })
                })
            } else {
                this.props.navigation.navigate('Auth')
            }
        })
    }

    selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1]
        });

        if (!result.cancelled) {
            this.setState({
                selectedImage: result.uri
            });
        }
    };

    uploadImage = async () => {
        let phone = this.state.phone;
        let uri = this.state.selectedImage;

        if (phone && uri) {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {

                    let uid = user.uid

                    if (uri) {
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

                        firebase.storage().ref().child("display pictures").put(blob)
                            .then((snapshot) => {
                                return snapshot.ref.getDownloadURL();
                            })
                            .then(downloadURL => {
                                database.child('Users').child(uid).update({
                                    phone: phone,
                                    photoURL: downloadURL
                                }, () => {
                                    AsyncStorage.removeItem("newUser");
                                    this.props.navigation.navigate('HomeStackNavigator')
                                })
                            })

                            .catch(err => alert(err))
                    }
                } else {
                    alert('not a user')
                }

            });
        } else {
            alert('Please enter your phone number')
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


                <View style={styles.inputCont}>
                    <Item>
                        <Icon active name='home' type='FontAwesome' style={{ fontSize: 30, margin: 5 }} />
                        <Input
                            value={this.state.phone}
                            keyboardType="numeric"
                            placeholder="Phone Number"
                            onChangeText={text => this.setState({ phone: text })}
                        />
                    </Item>

                </View>
                <View style={{ height: width, alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableHighlight onPress={this.selectImage}>
                        <Image
                            source={selectedImage ? { uri: selectedImage } : placeholder}
                            alt="placeholder"
                            style={{ height: width * 0.7, width: width * 0.7 }}
                        />
                    </TouchableHighlight>

                    <View style={{ alignContent: 'center' }}>
                        <Button
                            onPress={this.uploadImage}
                            style={{
                                backgroundColor: '#47bc72',
                                borderRadius: 10,
                                padding: 10,
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


Profile.navigationOptions = {
    drawerLabel: "Profile",
    drawerIcon: ({ tintColor }) => (
        <Icon name="account-edit" style={{ color: tintColor, fontSize: 25 }} />
    )
};

export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    inputCont: {
        padding: 25,
    }
});