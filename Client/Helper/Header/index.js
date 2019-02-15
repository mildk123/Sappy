import React, { Component, Fragment } from "react";
import { View, Dimensions } from 'react-native'
import { Header, Left, Body, Right, Button, Title, Icon, Text, Item, Input } from "native-base";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { Button as Buttonel } from "react-native-elements";

const { width } = Dimensions.get("window");

class HeaderComp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Header
          style={{ backgroundColor: this.props.headerColor }}
          iosBarStyle={"light-content"}
          hasTabs={this.props.tabs}
        >
          <Left>

            <Button
              onPress={
                this.props.goBack === true
                  ? () => this.props.navigation.goBack()
                  : () => this.props.navigation.toggleDrawer()
              }
              transparent
            >
              <Text><IconMaterial name={this.props.icon} size={23} color="white" /></Text>
            </Button>

          </Left>

          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>


            {this.props.favBtn && (
              <Button transparent>
                <Icon name="heart" />
              </Button>
            )}

            {this.props.threeDots && (
              <Button transparent>
                <Icon name="more" />
              </Button>
            )}
          </Right>
        </Header>

        <View style={{ padding: 5 }}>
          <Item >
            <Icon name="ios-search" />
            <Input placeholder="Find work" />
            <Buttonel
            title="Search"

              buttonStyle={{
                borderRadius: 12,
                elevation: 0
              }}
            />
          </Item>
        </View>

      </Fragment>
    );
  }
}

export default HeaderComp;
