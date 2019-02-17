import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../Helper/Header';

class AddServices extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            data: null
        }
    }

    static navigationOptions = {
        header: null
    };

    render() {
        const { isLoading, data } = this.state;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        headerColor="#47bc72"
                        icon={'arrow-left'}
                        title={"Add Services"}
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
                    title={"Add Services"}
                    goBack={true}
                    {...this.props}
                />
                <View style={styles.contentDiv}>
                    <Text>Add Services</Text>
                </View>
            </View>
        )
    }
}

export default AddServices;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    contentDiv: {
        marginTop: 18,
        flexDirection: "column",
        alignItems: "center"
    },
    btnDiv: {
        alignItems: "flex-end",
        margin: 25
    }
});
