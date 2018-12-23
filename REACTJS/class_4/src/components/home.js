import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import firebase from 'firebase'

export class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            chat: []
        }

        var chatMessages = [];
        var chatRef = firebase.database().ref('chatMessages/');
        chatRef.on('child_added', (snapshot) => {
            const obj = snapshot.val();
            obj.key = snapshot.key;
            chatMessages.push(obj);
            this.setState({ chat: chatMessages })
        });


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

    sendMessage() {
        const data = {
            senderUid: this.state.user.uid,
            sender: this.state.user.username,
            message: this.refs.msg.value
        }
        firebase.database().ref("/chatMessages/").push(data)
            .then(() => {
                console.log("Send Success");
            });
    }


    render() {
        const inputStyle = {
            padding: "10px 5px",
            margin: "10px 5px",
            width: "50%"
        }
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

                <ul>
                    {this.state.chat.map((val, idx) => {
                        return <li key={idx}>  <b>{val.sender}:</b> {val.message}  </li>
                    })}
                </ul>

                <input type="text" ref="msg" style={inputStyle} />
                <Button onClick={this.sendMessage.bind(this)}>Send</Button>

            </div>
        )
    }
}