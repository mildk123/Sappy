import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class StartScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#ffffff",
                justifyContent: 'space-between',
            }}>
                <View style={{
                    backgroundColor: 'red', padding: 50, flexDirection: "row",
                    justifyContent: 'space-around',
                }}>

                    <Text> StartScreen </Text>
                </View>

                <View style={{
                    maxHeight: "60%",
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }} >

                    <Text> StartScreen </Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-around',
                }}>

                    <Text> StartScreen </Text>
                </View>
            </View>
        )
    }
}

export default StartScreen
