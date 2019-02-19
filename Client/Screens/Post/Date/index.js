import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

const { height, width } = Dimensions.get("window");

class Date extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
        }
    }

    static navigationOptions = {
        header: null
    };



    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        headerColor="#47bc72"
                        icon={'arrow-left'}
                        title={"Date"}
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
                    icon={'arrow-left'}
                    title={"Date"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                />
                <View style={styles.contentDiv}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text>Post Date</Text>
                    </View>


                </View>

            </View>
        )
    }
}

export default Date;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    contentDiv: {
        padding: 15,
        flexDirection: "column",
    },
});
