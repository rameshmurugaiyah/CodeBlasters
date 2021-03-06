import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

@inject('loginStore') @observer
class Login extends React.Component {

    render(){
        console.log(this.props.loginStore);
        return (
            <Modal show={this.props.showLoginModal} onHide= {() => { this.props._setLoginModal(false); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Email" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="small">Reset</Button>
                        <Button bsStyle="primary"  bsSize="small">Login</Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        );
    }

}
export default Login;