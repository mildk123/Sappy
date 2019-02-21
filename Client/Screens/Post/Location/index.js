import React, { Component } from 'react';
import { Constants, Location, Permissions, MapView } from 'expo';

import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

import { Button, Icon } from 'react-native-elements';

import MapViewDirections from "react-native-maps-directions";


const { height, width } = Dimensions.get("window");

class Map extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            region: {
                latitude: 24.918266, 
                longitude: 67.10272,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: {
                myMarker: {
                    latitude: 24.918266,
                    longitude: 67.10272,
                    title: "My Location",
                    description: "My marker"
                }
            }

        }
    }


    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }


    _getLocationAsync = async () => {
        let serviceState = (await Location.getProviderStatusAsync()).locationServicesEnabled
        if (serviceState !== true) {
            alert('Please enable your location service!')
            this.setState({
                errorMessage: 'Please enable your location service!'
            })
        }

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({})
        alert(location.coords)
    };

    next = () => {
        this.props.navigation.navigate('Budget')
    }



    render() {
        const { isLoading } = this.state;
        const { region, markers } = this.state;

        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        headerColor="#47bc72"
                        icon={'arrow-left'}
                        title={"Location"}
                        hasTabs={false}
                        searchBar={false}
                        favBtn={false}
                        threeDots={false}
                        goBack={true}
                        {...this.props}
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
                    title={"Location"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                    goBack={true}
                    {...this.props}
                />

                <MapView style={{ flex: 1 }}
                    showsCompass={true}
                    zoomControlEnabled={true}
                    loadingEnabled={true}
                    followsUserLocation={true}
                    mapType="hybrid"
                    showsUserLocation={true}
                    region={region}
                >
                    <MapView.Marker
                        pinColor="red"
                        title={markers.myMarker.title}
                        description={markers.myMarker.description}
                        key={markers.myMarker.title}
                        coordinate={markers.myMarker}
                    />

                </MapView>


                <Button
                    onPress={() => this.next()}
                    title={"Next"}
                    containerStyle={{ padding: 15 }}
                    buttonStyle={{ padding: 10, backgroundColor: '#47bc72', borderRadius: 15, elevation: 0 }}
                />



            </View>
        )
    }
}

export default Map;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    contentDiv: {
        padding: 15,
        flexDirection: "row",
    }
});
