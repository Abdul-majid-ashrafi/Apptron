import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class LoginComponent extends Component {
    render() {
        return (
            <div>
                <Alert bsStyle="warning"> <strong>Login page</strong> <Link to="/signup">Create new account</Link></Alert>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" placeholder="jane.doe@example.com" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" />
                    </FormGroup>{' '}
                    <Button type="submit">Login</Button>
                </Form>;
      </div>
        )
    }
}