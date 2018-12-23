import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errorMSG: ""
        }
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        this.setState({ errorMSG: "" })
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ errorMSG: error.message })
                console.log("Error", error)
            });
    }


    render() {
        return (
            <div>
                <Alert bsStyle="warning"> <strong>Signin Page </strong><Link to="/signup">Create an accoout?</Link> </Alert>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name="email" placeholder="jane.doe@example.com" onChange={this.onChangeHandler.bind(this)} />
                    </FormGroup>{' '}
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" name="password" onChange={this.onChangeHandler.bind(this)} />
                    </FormGroup>{' '}
                    <Button type="submit" onClick={this.submit.bind(this)}>Login</Button>
                </Form>;
{(this.state.errorMSG) ?
                    <Alert bsStyle="warning"> <strong>{this.state.errorMSG}</strong> </Alert>
                    : ""}

            </div>
        )
    }
}