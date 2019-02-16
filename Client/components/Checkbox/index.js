import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import { Item } from 'native-base';

class Checkbox extends Component {
    constructor() {
        super()
        this.state = {
            fiveKm: true,
            tenKm: false,
            fiveteenKm: true
        }
    }

    changeState = (name) => {
        let _state = name + 'Km';

        this.setState({
            [_state]: !this.state[_state]
        })
    }

    render() {
        return (
            <View>
                <Item>
                    <CheckBox
                        title='5KM'
                        checked={this.state.fiveKm}
                        onPress={() => this.changeState('five')}
                        containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: 'green' }}
                        uncheckedColor={'green'}
                        iconType='MaterialIcons'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='green'
                        center

                        size={22}
                    />
                    <CheckBox
                        title='10KM'
                        checked={this.state.tenKm}
                        onPress={() => this.changeState('ten')}
                        containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: 'green' }}
                        uncheckedColor={'green'}
                        iconType='MaterialIcons'
                        
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='green'
                        center

                        size={22}
                    />
                    <CheckBox
                        title='15KM'
                        checked={this.state.fiveteenKm}
                        onPress={() => this.changeState('fiveteen')}
                        containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: 'green' }}
                        uncheckedColor={'green'}
                        iconType='MaterialIcons'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='green'
                        center

                        size={22}
                    />
                </Item>
            </View>
        );
    }
}

export default Checkbox;