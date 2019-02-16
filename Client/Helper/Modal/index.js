import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';

import Header from "../Header";
import Dropdown from '../../components/Dropdown'
import Checkbox from '../../components/Checkbox';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Modal
                animationType='slide'
                transparent={false}
                hardwareAccelerated
                presentationStyle='pageSheet'
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>

                <View style={{ flex: 1, backgroundColor: 'pink', flexDirection: 'column' }}>

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


                    <View style={{ padding: 20 }}>

                        <View style={{ padding: 10 }}>
                            <Text>Service Type</Text>
                            <Dropdown />
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text>Distance</Text>
                            <Checkbox />
                        </View>

                    </View>



                    <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 25 }}>
                        <View style={{flexDirection: 'row'}}>
                            <Button
                                title="Cancel"
                                buttonStyle={{
                                    backgroundColor: 'red',
                                    elevation: 0
                                }}
                                containerStyle={{
                                    padding: 4,
                                }}
                            />
                            <Button
                                title="Done"
                                buttonStyle={{
                                    backgroundColor: 'blue',
                                    elevation: 0
                                }}
                                containerStyle={{
                                    padding: 5,
                                }}
                            />
                        </View>
                    </View>

                </View>


            </Modal>
        );
    }
}

{/* <TouchableHighlight
    onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
    }}>
    <Text>Hide Modal</Text>
</TouchableHighlight> */}
export default ModalExample;