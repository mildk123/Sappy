import React, { Component } from "react";
import { ListView } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,Card,CardItem
} from "native-base";

export default class SwipeableListExample extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.data
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (
      <Container>
        <Content>
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}

            renderRow={data => (
              // <ListItem> 
                <Card>
                  <CardItem>
                    <Text>Reciever Name: {data} </Text>
                  </CardItem>
                  <CardItem>
                    <Text>Address: {data} </Text>
                  </CardItem>
                  <CardItem>
                    <Text> {data} </Text>
                  </CardItem>
                </Card>
              // </ListItem>
            )}

            renderLeftHiddenRow={data => (
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>
            )}

            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
              >
                <Icon active name="trash" />
              </Button>

            )}
          />
        </Content>
      </Container>
    );
  }
}
