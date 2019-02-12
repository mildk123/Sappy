import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import swal from 'sweetalert'
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'
import Card from '../../Helper/CardCont'


class HomeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      employeeList: [],
      searchCat : 'emp_fname'
    };

    this.checkAuth()
  }

  checkAuth = () => {
    let token = sessionStorage.getItem('SessionToken')
    if (!token) {
      this.props.history.replace('/')
    } else {
      this.fetchEmployee()
    }
  }

  dropOnChange = (event, data) => {
    this.setState({
      searchCat : data.value
    })
  }

  searchTextChange = (data) => {
    this.setState({
      searchTerm : data
    })
  }

  buttonHandler = () => {
    this.searchEmp()
  }

  fetchEmployee = () => {
    fetch('/employees/get')
      .then(data => data.json())
      .then(dat => {
        let response = dat.employee;
        if (response) {

          this.setState({
            employeeList: response,
            isFetching: false
          })
        } else {
          swal('failed to get employees list')
        }

      })
      .catch(err => console.log(err.message))
  }

  searchEmp = () => {
    fetch('/employees/search',{
      method : "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        searchCat : this.state.searchCat,
        searchTerm : this.state.searchTerm
      })
    })
      .then(data => data.json())
      .then(dat => {
        console.log(dat)
        let response = dat.employee;
        if (response) {
          this.setState({
            employeeList: response,
            isFetching: false
          })
        } else {
          swal('failed to get employees list')
        }

      })
      .catch(err => console.log(err.message))
  }

  render() {
    const { employeeList } = this.state;
    return (
      <Fragment>

        {/* App Bar//////////////////////// */}
        <AppBar {...this.props}
          variant={'h5'}
          textColor={'inherit'}
          handleShowClick={this.props.handleShowClick}
          addEmp="Add Employee"
        >
          Home
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

        {/* Employees Card //////////////////////// */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {employeeList ? (
            employeeList.map((item, index) => {
              return <div key={index}><Card
                fname={item.emp_fname}
                dept={item.emp_dept}
                id={`#${Math.floor(Math.random() * 9999)}`}
                band={item.emp_band}
                specs={`
                ${item.emp_specs[0]}  
                ${item.emp_specs[1] ? (`/ ${item.emp_specs[1]} `) : ''} 
                ${item.emp_specs[2] ? (`/ ${item.emp_specs[2]} `) : ''}
                `}
                father={item.father_info ? (item.father_info.name) : ('Not mentioned')}
                address={`House no : ${item.address[0].house_no},${item.address[0].flat_no} `}
              />
              </div>
            })
          ) : (
              <Card
                fname='first Name'
                dept='Department'
                id='Id'
                band='band'
                specs="specification"
                father="father's name"
                address="Address"
              />
            )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(HomeComp);
