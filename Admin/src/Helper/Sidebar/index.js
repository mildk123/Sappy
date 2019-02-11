import React, { Component } from "react";

import {  Icon, Menu, Sidebar } from 'semantic-ui-react'


class SideBar extends Component {
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
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
        // width='very thin'
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
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}


export default SideBar;
