import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Image } from 'react-native';
import { ImagePicker } from 'expo'
import { Spinner } from 'native-base';
import { Input } from 'react-native-elements'

import Header from '../../../Helper/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { DatePicker } from 'native-base';

import { Button, Icon } from 'react-native-elements';

import placeholder from '../../../Assets/place.png'

import firebase from '../../../config'
const database = firebase.database().ref()

const { height, width } = Dimensions.get("window");


class Budget extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            startDate: new Date(),
            endDate: new Date(),
            serviceType: '',
            serviceProcedure: '',
            title: '',
            desc: '',
            myLocation: {},
            budget: '',
            selectedImage: null
        }
    }


    getDataFromProps = () => {
        let serviceType = this.props.navigation.state.params.serviceType
        let serviceProcedure = this.props.navigation.state.params.serviceProcedure
        let title = this.props.navigation.state.params.title
        let desc = this.props.navigation.state.params.desc
        let myLocation = this.props.navigation.state.params.myLocation

        console.log(serviceType, serviceProcedure, title, desc, myLocation)

        if (serviceProcedure) {
            this.setState({
                serviceType,
                serviceProcedure,
                title,
                desc,
                myLocation
            })
        } else {
            this.props.navigation.goBack()
        }
    }

    componentWillMount = () => {
        this.getDataFromProps()
    }

    static navigationOptions = {
        header: null
    };

    setStartDate = (newDate) => {
        this.setState({ startDate: newDate });
    }

    setEndDate = (newDate) => {
        this.setState({ endDate: newDate });
    }

    onChange = (name, Text) => {
        this.setState({
            [name]: Text
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

    uploadData = async () => {
        const {
            startDate,
            endDate,
            serviceType,
            serviceProcedure,
            title,
            desc,
            myLocation,
            budget,
            cellNo,
        } = this.state;
        let uri = this.state.selectedImage;

        if (!serviceType || !title || !desc || !serviceProcedure || !myLocation || !budget) {
            alert('Pleas fill out the marked fields')
        } else {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user) {
                    this.setState({
                        isLoading: true
                    })
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

                        firebase.storage().ref().child("AdPics").put(blob)
                            .then((snapshot) => {
                                return snapshot.ref.getDownloadURL();
                            })
                            .then(downloadURL => {
                                database.child('Jobs').child(serviceType).push({
                                    photoURL: downloadURL,
                                    startDate,
                                    endDate,
                                    serviceType,
                                    serviceProcedure,
                                    title,
                                    desc,
                                    myLocation,
                                    budget,
                                    cellNo,
                                }, () => {
                                    this.props.navigation.navigate('HomeStack')
                                })
                            })

                            .catch(err => alert(err))
                    }
                } else {
                    alert('not a user')
                }

            });
        }
    }

    render() {
        const { isLoading, selectedImage } = this.state;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        headerColor="#47bc72"
                        icon={'arrow-left'}
                        title={"Budget"}
                        hasTabs={false}
                        searchBar={false}
                        favBtn={false}
                        threeDots={false}
                        goBack={true}

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
                    icon={'arrow-left'}
                    title={"Budget"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                    goBack={true}
                />
                <View style={styles.contentDiv}>
                    {/* Budget Input ?//////// */}
                    <View>
                        <Input
                            onChangeText={(text) => this.onChange('budget', text)}
                            label={'What is your budget?'}
                            labelStyle={{ fontSize: 18, padding: 5 }}
                            placeholder="15,000"
                            keyboardType="numeric"
                            inputContainerStyle={{
                                width: width * 0.9
                            }}
                            leftIcon={
                                <FontAwesome
                                    name='money'
                                    size={24}
                                    color='black'
                                />
                            }
                        />
                    </View>
                    <View>
                        <Input
                            onChangeText={(text) => this.onChange('cellNo', text)}
                            label={'Contact number'}
                            labelStyle={{ fontSize: 18, padding: 5 }}
                            placeholder="0900-78601"
                            keyboardType="numeric"
                            inputContainerStyle={{
                                width: width * 0.9
                            }}
                            leftIcon={
                                <FontAwesome
                                    name='mobile-phone'
                                    size={32}
                                    color='black'
                                />
                            }
                        />
                    </View>

                    {/* Date Input ?//////// */}
                    <View style={{ marginTop: 10 }}>

                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 18, padding: 5 }}>
                                Select start date:
                            </Text>
                            <DatePicker
                                defaultDate={new Date()}
                                minimumDate={new Date()}
                                maximumDate={new Date(2019, 11, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={true}
                                animationType={'fade'}
                                androidMode={'calendar'}
                                placeHolderText="Press me."
                                textStyle={{ color: "#47bc72" }}
                                placeHolderTextStyle={{ color: "white", fontSize: 22, backgroundColor: '#47bc72', borderRadius: 15 }}
                                onDateChange={this.setStartDate}
                                disabled={false}
                            />
                        </View>

                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 17, padding: 5 }}>
                                Select end date:
                            </Text>
                            <DatePicker
                                defaultDate={new Date()}
                                minimumDate={new Date()}
                                maximumDate={new Date(2019, 11, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={true}
                                animationType={'fade'}
                                androidMode={'calendar'}
                                placeHolderText="Press me."
                                textStyle={{ color: "#47bc72" }}
                                placeHolderTextStyle={{ color: "white", fontSize: 22, backgroundColor: '#47bc72', borderRadius: 15 }}
                                onDateChange={this.setEndDate}
                                disabled={false}
                            />
                        </View>


                    </View>

                </View>



                <View style={{
                    justifyContent: 'space-evenly',
                }}>
                    <View style={{
                        flexDirection: 'row', padding: 20, justifyContent: 'space-between',
                    }}>
                        <TouchableHighlight onPress={this.selectImage}>
                            <Image
                                source={selectedImage ? { uri: selectedImage } : placeholder}
                                alt="placeholder"
                                style={{ height: width * 0.4, width: width * 0.4 }}
                            />
                        </TouchableHighlight>

                        <Button
                            onPress={() => this.uploadData()}
                            title={"Done"}
                            containerStyle={{ justifyContent: 'center' }}
                            buttonStyle={{ padding: 10, backgroundColor: '#47bc72', borderRadius: 12, elevation: 0, width: width * 0.3 }}
                        />
                    </View>


                </View>


            </View >
        )
    }
}

export default Budget;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    contentDiv: {
        padding: 10,
        flexDirection: "column",
    },
});
