import React, { Component } from 'react';
import firebase from 'firebase';

export class MainComponent extends Component {
    constructor() {
        super();
        var self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const uid = user.uid;
                firebase.database().ref('/Users/' + uid).once('value')
                    .then((snapshot) => {
                        const userOBJ = snapshot.val();
                        localStorage.setItem("user", JSON.stringify(userOBJ));
                        self.props.history.push("/home")
                    });
            } else {
                self.props.history.push("/login")
            }
        });
    }


    render() {
        return (
            <div>


            </div>
        )
    }


}