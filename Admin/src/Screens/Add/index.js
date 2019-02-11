import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'
import swal from 'sweetalert'
import { Form, Input, Button } from 'semantic-ui-react'
import { Card } from '@material-ui/core';


class AddEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.checkAuth()
    }

    checkAuth = () => {
        let token = sessionStorage.getItem('SessionToken')
        if (!token) {
            this.props.history.replace('/')
        }
    }

    onChange = (name, data) => {
        this.setState({
            [name]: data.target.value
        })
    }

    AddEmp = () => {
        const { Address, Department, Spec1, Spec2, Band, fatherName, fname } = this.state;
        if (!Address || !Department || !Spec1 || !Band || !Spec2 || !fatherName || !fname) {
            swal('Please fill all the required fields')
        } else {
            fetch('/employees/add ', {
                method:"POST",
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify({
                    Address, Department, Spec1, Spec2, Band, fatherName, fname
                })
            })
            .then(resp => resp.json())
            .then(resp => {
                let response = resp.ok
                if (response) {
                    this.props.history.replace('/Home')
                }
            })
            .catch(err => err.message)
        }
    }


    render() {
        return (
            <Fragment>
                <div style={{padding: 10}}>
                {/* App Bar//////////////////////// */}
                <AppBar {...this.props}
                    variant={'h5'}
                    textColor={'inherit'}
                >
                    Add Employee
        </AppBar>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 50 }}>
                    <Card style={{ padding: 25 }}>
                        <Form>
                            <Form.Field required>
                                <label>First Name</label>
                                <Input type='text' placeholder='Steven' onChange={(text) => this.onChange('fname', text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Father name</label>
                                <Input type='text' placeholder='Oscar' onChange={(text) => this.onChange(`fatherName`, text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Department</label>
                                <Input type='text' placeholder='Technology' onChange={(text) => this.onChange('Department', text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Band</label>
                                <Input type='text' placeholder='G1' onChange={(text) => this.onChange('Band', text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Specification 1</label>
                                <Input type='text' placeholder='Android' onChange={(text) => this.onChange('Spec1', text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Specification 2</label>
                                <Input type='text' placeholder='Java' onChange={(text) => this.onChange('Spec2', text)} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Address</label>
                                <Input type='text' placeholder='B315, Bakers Street' onChange={(text) => this.onChange('Address', text)} />
                            </Form.Field>
                            <div>
                                <Button size="large" onClick={this.AddEmp} color="green">Done</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}


export default connect(mapStateToProps)(AddEmp);
