import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';

export class LoginComponent extends Component {
    render() {
        var form = this.props.labels;
        return (
            <div className="App">
                <Alert bsStyle="warning"> <strong>Login page</strong> Just ui component</Alert>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>{form.mail}</ControlLabel>{' '}
                        <FormControl type="text" placeholder="jane.doe@example.com" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>{form.pass}</ControlLabel>{' '}
                        <FormControl type="text" placeholder={form.placeholder} />
                    </FormGroup>{' '}
                    <Button type="submit">{form.btn}</Button>
                </Form>;
      </div>
        );
    }
}


// export default LoginComponent;
