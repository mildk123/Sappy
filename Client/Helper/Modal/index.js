import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

import Header from "../Header";

class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    close = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <View>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>

                    <View
                    >
                        <Header
                            headerColor="#47bc72"
                            icon={'close-box'}
                            title={"Filter"}
                            hasTabs={false}
                            searchBar={false}
                            favBtn={false}
                            threeDots={false}
                            close={this.close}
                        />


                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>


                    </View>

                </Modal>

            </View>
        );
    }
}

export default ModalExample;