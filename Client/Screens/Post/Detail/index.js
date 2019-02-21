import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

import { Button } from "react-native-elements";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { CheckBox } from "react-native-elements";

import { Input } from 'react-native-elements';

const { height, width } = Dimensions.get("window");

class Details extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            physical: false,
            online: false,
            title: '',
            desc: '',
            serviceType: ''
        }
    }
    static navigationOptions = {
        header: null
    };

    componentDidMount = () => {
        let serviceType = this.props.navigation.state.params.serviceType

        if (serviceType) {
            this.setState({
                serviceType: serviceType
            })
        } else {
            this.props.navigation.goBack()
        }
    }

    _checkBox = (name) => {
        this.setState({
            physical: false,
            online: false,
            [name]: true
        })
    }

    onChange = (name, Text) => {
        this.setState({
            [name]: Text
        })
    }

    next = () => {
        const { serviceType, title, desc, physical, online } = this.state;

        if (!serviceType || !title || !desc) {
            alert('Please fill all the text fields')
        } else {
            if (physical) {
                this.props.navigation.navigate('Location', { serviceType, title, desc, serviceProcedure: 'online' })
            }
            if (online) {
                this.props.navigation.navigate('Location', { serviceType, title, desc, serviceProcedure: 'physical' })

            } else {
                alert('Please select task type')
            }
        }
    }

    render() {
        const { isLoading } = this.state;
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

                    <View style={{ margin: 10 }}>
                        <Input
                            onChangeText={(Text) => this.onChange('title', Text)}
                            labelStyle={{ fontSize: 18, padding: 5 }}
                            label={'Task title'}
                            placeholder='e.g Clean my house'
                            inputContainerStyle={{
                                width: width * 0.9
                            }}
                            leftIcon={
                                <FontAwesome
                                    name='file-text-o'
                                    size={24}
                                    color='black'
                                />
                            }
                        />
                    </View>

                    <View style={{ margin: 10 }}>
                        <Input
                            onChangeText={(Text) => this.onChange('desc', Text)}
                            label="Description"
                            labelStyle={{ fontSize: 18, padding: 10 }}
                            placeholder='e.g i want my house clean top to bottom...'
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderRadius: 15,
                                height: height * 0.3,
                                width: width * 0.9
                            }}
                        />
                    </View>


                    {/* CheckBox/////////////////////// */}
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>What type of task is it?</Text>
                        <View style={{ flexDirection: 'row', padding: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <CheckBox
                                title={'Physical'}
                                textStyle={this.state.physical === true ? { color: 'white' } : { color: '#1D976C' }} checked={this.state.physical}
                                onPress={() => this._checkBox('physical')}
                                containerStyle={this.state.physical === true ? { borderRadius: 25, backgroundColor: '#1D976C', width: 120 } : { borderWidth: 0, borderRadius: 25, borderColor: '#1D976C', width: 120 }}
                                uncheckedColor={'#1D976C'}
                                iconType='MaterialIcons'
                                checkedIcon='check-box'
                                uncheckedIcon='check-box-outline-blank'
                                checkedColor='#ffffff'
                                center

                                size={22}
                            />
                            <CheckBox
                                title={'Online'}
                                textStyle={this.state.online === true ? { color: 'white' } : { color: '#1D976C' }}
                                checked={this.state.online}
                                onPress={() => this._checkBox('online')}
                                containerStyle={this.state.online === true ? {
                                    borderRadius: 25,
                                    backgroundColor: '#1D976C',
                                    width: 120
                                } :
                                    {
                                        borderWidth: 0,
                                        borderRadius: 25,
                                        borderColor: '#1D976C', width: 120
                                    }}
                                uncheckedColor={'#1D976C'}
                                iconType='MaterialIcons'
                                checkedIcon='check-box'
                                uncheckedIcon='check-box-outline-blank'
                                checkedColor='#ffffff'
                                center

                                size={22}
                            />
                        </View>
                    </View>

                    <View style={{ alignSelf: 'flex-end' }}>
                        <Button
                            title="Next"
                            onPress={() => this.next()}
                            iconRight
                            icon={<IconMaterial name='arrow-right' size={15} color="gray" />}
                            titleStyle={{
                                color: 'gray'
                            }}
                            buttonStyle={{
                                backgroundColor: 'white',
                                borderWidth: 0,
                                width: width * 0.3,
                                padding: 0,
                                elevation: 0
                            }}
                        />
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
        padding: 5,
        flexDirection: "column",
    },
});
