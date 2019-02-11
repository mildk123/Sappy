import React, { Component, Fragment } from 'react';
import Button from '../../Helper/Button'
// Local CSS
import './style.css'
import { Header } from 'semantic-ui-react';


class AuthScreen extends Component {
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
        } else {
            this.props.history.replace('/Home')
        }
    }

    render() {
        return <Fragment  >
            <div className="myComponent" style={{ height: '100vh', background: ' linear-gradient(180deg, #6a3093, #a044ff)', overflow: 'auto' }}>
                <h1>Sappy</h1>
                <div className="btnDiv">
                    <Button {...this.props} />
                </div>
            </div>
        </Fragment>
    }


}

export default AuthScreen;