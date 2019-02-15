import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions, Text, AsyncStorage } from "react-native";

const { width } = Dimensions.get("window");



class More extends Component {
    constructor() {
        super();

        this.state = {};
    }
    static navigationOptions = {
        header: null
      };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Text>ASD</Text>
                </View>
            </View>
        );
    }
}

export default More;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'space-between'
    },
    imgContainer: {
        maxHeight: "60%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    picSize: {
        maxHeight: width * 0.6,
        maxWidth: width * 0.6
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
    }
});
