import React, { Component } from 'react';
import { Constants, Location, Permissions} from 'expo';

import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { Platform } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

import { Button, Icon } from 'react-native-elements';


const { height, width } = Dimensions.get("window");

class Map extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
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
        
    };




    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }
        const { isLoading } = this.state;
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
                <View style={styles.contentDiv}>

                    <Text >{text}</Text>

                </View>

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
