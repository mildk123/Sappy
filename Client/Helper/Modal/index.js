import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';

import Header from "../Header";
import Dropdown from '../../components/Dropdown'
import Checkbox from '../../components/Checkbox';

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
                    hardwareAccelerated
                    presentationStyle='pageSheet'
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


                        <View style={{ padding: 20 }}>

                            <View style={{padding: 10}}>
                                <Text>Service Type</Text>
                                <Dropdown />
                            </View>

                            <View style={{padding: 10}}>
                                <Text>Distance</Text>
                                <Checkbox />
                            </View>

                        </View>


                    </View>

                </Modal>

            </View>
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