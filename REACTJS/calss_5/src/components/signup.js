import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import firebase from 'firebase';

export class SignupComponent extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
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
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                const uid = response.user.uid;
                const userRef = firebase.database().ref("Users/" + uid)
                const data = {
                    email: this.state.email,
                    username: this.state.userName,
                    uid: uid
                }
                userRef.set(data).then(res => {
                    console.log("response", res);
                    this.props.history.push("/");
                }).catch(error => {
                    this.setState({ errorMSG: "During save user ion db " + error.message })
                })
            })
            .catch((error) => {
                this.setState({ errorMSG: error.message })
                console.log("Error", error)
            });
    }


    render() {
        return (
            <div>
                <Alert bsStyle="warning"> <strong>Signup page</strong><Link to="/login">Have an already accoout?</Link> </Alert>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>User Name</ControlLabel>{' '}
                        <FormControl type="text" name="userName" onChange={this.onChangeHandler.bind(this)} placeholder="janeom" />
                    </FormGroup>{' '}
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name="email" placeholder="jane.doe@example.com" onChange={this.onChangeHandler.bind(this)} />
                    </FormGroup>{' '}
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" name="password" onChange={this.onChangeHandler.bind(this)} />
                    </FormGroup>{' '}
                    <Button type="submit" onClick={this.submit.bind(this)}>Create Account</Button>
                </Form>;

{(this.state.errorMSG) ?
                    <Alert bsStyle="warning"> <strong>{this.state.errorMSG}</strong> </Alert>
                    : ""}

            </div>
        )
    }
}