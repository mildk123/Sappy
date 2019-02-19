import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { Spinner } from 'native-base';

import Header from '../../../Helper/Header';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



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

    componentDidMount = () => {
        // let serviceType = this.props.navigation.state.params.serviceType
        // console.log(serviceType)
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

                    <View style={{ margin: 15 }}>
                        <Input
                            labelStyle={{ fontSize: 18, padding: 5 }}
                            label={'Task title'}
                            placeholder='e.g Clean my house'
                            inputContainerStyle={{
                                width: width * 0.9
                            }}
                            leftIcon={
                                <Icon
                                    name='file-text-o'
                                    size={24}
                                    color='black'
                                />
                            }
                        />
                    </View>

                    <View style={{ margin: 15, backgroundColor: 'pink' }}>
                        <Input
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
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: "column",
        justifyContent: 'center',
    },
});
