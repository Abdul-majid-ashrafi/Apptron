import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import firebase from 'firebase'

export class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        this.setState({ user: user })
        console.log("render componentWillMount");
    }

    signOut() {
        firebase.auth().signOut()
            .then(() => {
                localStorage.clear();
                this.props.history.push("/login");
            }).catch(error => {
                console.log("Got an Error during logout", error)
            })
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {this.state.user.username[0].toUpperCase() + this.state.user.username.slice(1)}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text>
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            <Button onClick={this.signOut.bind(this)}>LogOut</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}