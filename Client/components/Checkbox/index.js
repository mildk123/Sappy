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
            fiveteenKm: false,
            twentyKm: false,
            moreKm: false
        }
    }

    changeState = (name) => {
        this.setState({
            fiveKm: false,
            tenKm: false,
            fiveteenKm: false,
            twentyKm: false,
            moreKm: false
        }, () => this.setState({
            [name]: true
        })
        )
    }

    render() {
        return (
            <View style={{ marginTop: 15 }}>
                <Item style={{ justifyContent: 'center', borderColor: 'transparent' }}>
                    <CheckBox
                        title='5KM'
                        checked={this.state.fiveKm}
                        onPress={() => this.changeState('fiveKm')}
                        containerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'green' }}
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
                        onPress={() => this.changeState('tenKm')}
                        containerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'green' }}
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
                        onPress={() => this.changeState('fiveteenKm')}
                        containerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'green' }}
                        uncheckedColor={'green'}
                        iconType='MaterialIcons'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='green'
                        center

                        size={22}
                    />
                </Item>
                <Item style={{ justifyContent: 'center',  borderColor: 'transparent' }}>
                    <CheckBox
                        title='20KM'
                        checked={this.state.twentyKm}
                        onPress={() => this.changeState('twentyKm')}
                        containerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'green' }}
                        uncheckedColor={'green'}
                        iconType='MaterialIcons'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='green'
                        center

                        size={22}
                    />
                    <CheckBox
                        title='> 20KM'
                        checked={this.state.moreKm}
                        onPress={() => this.changeState('moreKm')}
                        containerStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'green' }}
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