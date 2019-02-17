import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { CheckBox, Button } from 'react-native-elements'
import { Item, Icon, Spinner } from 'native-base';

import Header from '../../Helper/Header';

import firebase from '../../config'
const database = firebase.database().ref()

const { height } = Dimensions.get("window");

class AddServices extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
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
                isLoading: false,
                Categories: [...this.state.Categories, payload.key]
            })
        })
    }

    changeState = (name) => {
        this.setState({
            [name]: true
        })
    }

    AddServicesToDB = () => {
        const { Carpenter, Delivery, Electrician, Glazier, Masonry, Mechanic, Painter, WaterSupplier, Welder, } = this.state;
        if ( !Carpenter && !Delivery && !Electrician && !Glazier && !Masonry && !Mechanic && !Painter && !WaterSupplier && !Welder ) {
            return alert('Please Select at least one service.')
        }

        let firebaseUID = firebase.auth().currentUser.uid
        database.child('Services').child(firebaseUID).set({
            Carpenter: Carpenter,
            Delivery: Delivery,
            Electrician: Electrician,
            Glazier: Glazier,
            Masonry: Masonry,
            Mechanic: Mechanic,
            Painter: Painter,
            WaterSupplier: WaterSupplier,
            Welder: Welder,
        })
            .then(() => this.props.navigation.goBack())
            .catch(() => alert('Error Occurred!'))

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
                    <Item style={{ height: height * 0.5, flex: 0, flexWrap: 'wrap', justifyContent: 'space-between', borderColor: 'transparent' }}>
                        {Categories &&
                            Categories.map((item, index) => {
                                return <CheckBox
                                    key={index}
                                    title={item}
                                    checked={this.state[item]}
                                    onPress={() => this.setState({
                                        [item]: !this.state[item]
                                    })}
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


                <View style={styles.btnDiv}>
                    <Button
                        title="Done"
                        onPress={() => this.AddServicesToDB()}
                        icon={<Icon name="done" type="MaterialIcons" style={{ color: 'white' }} />}
                        buttonStyle={{
                            backgroundColor: "#47bc72",
                            width: 150,
                            height: 55,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5,
                            elevation: 0
                        }}
                    />
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
