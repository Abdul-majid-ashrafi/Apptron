import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class LoginComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is LoginComponent</h1>
                <ul>
                    <li>
                        <Link to="/">Back</Link>
                    </li>
                    <li>
                        <Link to="/signup/">Signup</Link>
                    </li>
                </ul>
            </div>
        )
    }
}