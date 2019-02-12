import React, { Component } from "react";
import HomeComp from '../../Components/Home'
import Sidebar from '../../Helper/Sidebar'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible : false
    }
    this.Sidebar = React.createRef()
  }

  handleShowClick = () => {
    this.Sidebar.current.handleShowClick()
  }
  render() {

    return (
      <Sidebar
      ref={this.Sidebar} 
      handleShowClick={this.state.visible}
      >
        <div style={{ height: '100vh', padding: 10 }}>
          <HomeComp {...this.props}
            handleShowClick={this.handleShowClick}
          />
        </div>
      </Sidebar>

    );
  }
}


export default Home;
