import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';

import { Spinner } from 'native-base';
import { Input } from 'react-native-elements'

import Header from '../../../Helper/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get("window");

class Budget extends Component {
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
                        title={"Budget"}
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
                    title={"Budget"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                />
                <View style={styles.contentDiv}>
                    <View style={{ alignSelf: 'center' }}>
                        <View>
                            <Input
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
                    </View>


                </View>

            </View>
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
        padding: 15,
        flexDirection: "column",
    },
});
