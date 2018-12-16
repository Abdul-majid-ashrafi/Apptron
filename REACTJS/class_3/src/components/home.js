import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is HomeComponent</h1>
                <ul>
                    <li>
                        <Link to="/login/">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup/">Signup</Link>
                    </li>
                </ul>
            </div>
        )
    }
}