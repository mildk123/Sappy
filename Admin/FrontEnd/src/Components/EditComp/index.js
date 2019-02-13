import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

// import swal from 'sweetalert'
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'
import Card from '../../Helper/CardCont'


class EditComp extends Component {
  constructor(props) {
    super(props);

    this.checkAuth()
  }

  checkAuth = () => {
    let token = sessionStorage.getItem('SessionToken')
    if (!token) {
      this.props.history.replace('/')
    }
  }



  render() {
    return (
      <Fragment>

        {/* App Bar//////////////////////// */}
        <AppBar {...this.props}
          variant={'h5'}
          textColor={'inherit'}
          handleShowClick={this.props.handleShowClick}
        >
          Edit Users
        </AppBar>

        {/* Search Card //////////////////////// */}
        <div style={{ paddingBlockStart: 30, paddingBlockEnd: 30, alignContent: 'center' }}>
          <Container>
            <Input
              dropHandler={(event, data) => this.dropOnChange(event, data)}
              textChange={(data) => this.searchTextChange(data)}
              buttonHandler={this.buttonHandler}
            />
          </Container>
        </div>

        {/* Users Card //////////////////////// */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card
            // userImage=
            name="Milad Khan"
            usertype="Service Provider"
            desc="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat"
            Location="2.035 , 26.24"
            Phone="0315-2289013"
            skills="Alteration | Computer | Photoshop"
            reviews="none"
          />

          <Card
            // userImage=
            name="Milad Khan"
            usertype="Service Provider"
            desc="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat"
            Location="2.035 , 26.24"
            Phone="0315-2289013"
            skills="Alteration | Computer | Photoshop"
            reviews="none"
          />

          <Card
            // userImage=
            name="Milad Khan"
            usertype="Service Provider"
            desc="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat"
            Location="2.035 , 26.24"
            Phone="0315-2289013"
            skills="Alteration | Computer | Photoshop"
            reviews="none"
          />

          <Card
            // userImage=
            name="Milad Khan"
            usertype="Service Provider"
            desc="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat"
            Location="2.035 , 26.24"
            Phone="0315-2289013"
            skills="Alteration | Computer | Photoshop"
            reviews="none"
          />
        </div>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(EditComp);