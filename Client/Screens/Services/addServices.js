import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';
import { CheckBox } from 'react-native-elements'
import { Item } from 'native-base';

import Header from '../../Helper/Header';

import firebase from '../../config'
const database = firebase.database().ref()

const { height } = Dimensions.get("window");

class AddServices extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            Categories: [],
            Carpenter: false,
            Delivery: false,
            Electrician: false,
            Glazier: false,
            Masonry: true,
            Mechanic: false,
            Painter: true,
            WaterSupplier: false,
            Welder: true
        }
        this.getCategories()
    }

    getCategories = () => {
        database.child('Categories').on('child_added', (payload) => {
            this.setState({
                Categories: [...this.state.Categories, payload.key],
                isLoading: false
            })
        })
    }

    changeState = (name) => {
        this.setState({
            [name]: true
        })
    }

    static navigationOptions = {
        header: null
    };


    render() {
        const { isLoading, Categories } = this.state;
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
                    <Item style={{ height: height * 0.5, flex: 0, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {Categories &&
                            Categories.map((item, index) => {
                                return <CheckBox
                                    key={index}
                                    title={item}
                                    checked={this.state[item]}
                                    onPress={() => this.setState({
                                        [item]: !this.state[item]
                                    })}
                                    iconRight
                                    containerStyle={this.state[item] === true ? { borderWidth: 1, borderRadius: 25, borderColor: '#1D976C', width: 120 } : { borderWidth: 0, borderRadius: 25, borderColor: '#1D976C', width: 120 }}
                                    uncheckedColor={'#1D976C'}
                                    iconType='MaterialIcons'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                                    checkedColor='#1D976C'
                                    center

                                    size={22}
                                />
                            })
                        }
                    </Item>
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
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    btnDiv: {
        alignItems: "flex-end",
        margin: 25
    }
});
