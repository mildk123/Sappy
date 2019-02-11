import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Content,
  Card,
  Left,
  Right,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";
export default class CardItemButton extends Component {
  render() {
    return (
      <Content padder>
        <Card style={styles.card}>
          <CardItem header style={styles.CardHeader}>
            <Left>
              <Text>Contact info</Text>
            </Left>
            <Right>
              <Button small transparent>
                <Text>Edit</Text>
              </Button>
            </Right>
          </CardItem>

          <CardItem style={styles.cardBody}>
            <Left>
              <Text>Name: </Text>
              <Text>Milad Khan</Text>
            </Left>
          </CardItem>

          <CardItem style={styles.cardBody}>
            <Left>
              <Text>Email: </Text>
              <Text>mildk123@gmail.com</Text>
            </Left>
          </CardItem>

          <CardItem style={styles.cardBody}>
            <Left>
              <Text>Phone: </Text>
              <Text>+92 315 2289013</Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  card: {},
  CardHeader: {},
  cardBody: {
      backgroundColor: '#e8e8e8'
  }
});
