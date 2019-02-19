import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

const { height, width } = Dimensions.get("window");

class Details extends Component {
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
        console.log('propssssm', this.props)
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        headerColor="#47bc72"
                        icon={'arrow-left'}
                        title={"Details"}
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
                    title={"Details"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                    goBack={true}
                    {...this.props}
                />
                <View style={styles.contentDiv}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text>Post Details</Text>
                    </View>


                </View>

            </View>
        )
    }
}

export default Details;


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
