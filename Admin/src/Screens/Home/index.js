import React, { Component, Fragment } from "react";
import HomeComp from '../../Components/Home'

import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class Home extends Component {
  constructor() {
    super()
    this.state = { visible: false }
  }


  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div style={{ height: '100%' }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='scale down'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='dashboard' />
              Dashboard
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='edit' />
              Edit User
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='servicestack' />
              Add Services
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

              <HomeComp {...this.props}
                handleShowClick={this.handleShowClick}
              />

              <Button.Group>
                <Button disabled={visible} onClick={this.handleShowClick}>
                  Show sidebar
      </Button>
                <Button disabled={!visible} onClick={this.handleHideClick}>
                  Hide sidebar
      </Button>
              </Button.Group>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    );
  }
}


export default Home;
