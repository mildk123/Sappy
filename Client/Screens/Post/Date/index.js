import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, DatePickerAndroid } from 'react-native';
import { Input, Icon, Button } from "native-base";

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

const { height, width } = Dimensions.get("window");

class Date extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            selectedDate: {
                day: "Since :",
                month: "",
                year: ""
            }
        }
    }

    openDate = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(2014, 6, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                await this.props.getDate(year, month, day);
                this.setState({
                    selectedDate: {
                        year,
                        month,
                        day
                    }
                });
            }
        } catch ({ code, message }) {
            alert("Cannot open date picker", message);
        }
    };

    componentDidMount() {
        console.log(this.props);
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
                    title={"Date"}
                    hasTabs={false}
                    searchBar={false}
                    favBtn={false}
                    threeDots={false}
                    goBack={true}
                    {...this.props}
                />
                <View style={styles.contentDiv}>
                    <View style={{ alignSelf: 'center' }}>
                        {this.state.selectedDate.day === "Since :" ? (
                            <View>
                                <Text>Click here123123</Text>
                                <Icon active name={"md-calendar"} style={{ fontSize: 32 }} />
                            </View>
                        ) : (
                                <View>
                                    <Text>Click here</Text>
                                    <Icon
                                        onPress={() =>
                                            this.setState({
                                                selectedDate: { year: "Since :", month: "", day: "" }
                                            })
                                        }
                                        active
                                        name={"ios-remove-circle-outline"}
                                        style={{ fontSize: 32, color: "red" }}
                                    />
                                </View>
                            )}

                        <Input
                            value={`${this.state.selectedDate.day}-${
                                this.state.selectedDate.month
                                }-${this.state.selectedDate.year}`}
                        />

                        <Button style={{padding: 10}} onPress={() => this.openDate()}>
                            <Text>Select Date</Text>
                        </Button>
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
        flexDirection: "row",
    },
});
