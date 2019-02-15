import React, { Component } from "react";
import { Header, Left, Body, Right, Button, Title, Icon, Text } from "native-base";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";


class HeaderComp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
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
          {this.props.searchBtn && (
            <Button transparent>
              <Icon name="search" />
            </Button>
          )}

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
    );
  }
}

export default HeaderComp;
