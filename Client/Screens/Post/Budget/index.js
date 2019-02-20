import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';
import { Input } from 'react-native-elements'

import Header from '../../../Helper/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { DatePicker } from 'native-base';

import { Button, Icon } from 'react-native-elements';


const { height, width } = Dimensions.get("window");

class Budget extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            startDate: new Date()
        }
    }

    static navigationOptions = {
        header: null
    };

    setStartDate = (newDate) => {
        this.setState({ startDate: newDate });
    }


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


                    {/* Budget Input ?//////// */}
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

                    {/* Date Input ?//////// */}

                    <View style={{ padding: 5, marginTop: 20 }}>


                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date()}
                            maximumDate={new Date(2019, 11, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={true}
                            animationType={'fade'}
                            androidMode={'calendar'}
                            placeHolderText="Select start date"
                            textStyle={{ color: "#47bc72" }}
                            placeHolderTextStyle={{ color: "black", fontSize: 18 }}
                            onDateChange={this.setStartDate}
                            disabled={false}
                        />

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, color: 'white', backgroundColor: '#47bc72', padding: 10 }}>
                                Date: {this.state.startDate.toString().substr(4, 12)}
                            </Text>
                        </View>

                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date()}
                            maximumDate={new Date(2019, 11, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={true}
                            animationType={'fade'}
                            androidMode={'calendar'}
                            placeHolderText="Select end date"
                            textStyle={{ color: "#47bc72" }}
                            placeHolderTextStyle={{ color: "black", fontSize: 18 }}
                            onDateChange={this.setStartDate}
                            disabled={false}
                        />

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, color: 'white', backgroundColor: '#47bc72', padding: 10 }}>
                                Date: {this.state.startDate.toString().substr(4, 12)}
                            </Text>
                        </View>


                    </View>

                    <View style={{marginTop: 50}}>

                        <Button
                            onPress={() => this.props.navigation.navigate('HomeStack')}
                            title={"Next"}
                            containerStyle={{ padding: 15 }}
                            buttonStyle={{ padding: 10, backgroundColor: '#47bc72', borderRadius: 15, elevation: 0 }}
                        />
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
