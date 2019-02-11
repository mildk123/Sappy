import React, { Component, Fragment } from "react";
import HomeComp from '../../Components/Home'


class Home extends Component {
  
  render() {
    return (
      <HomeComp {...this.props} />      
    );
  }
}


export default Home;
