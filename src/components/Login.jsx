import React, { Component } from 'react';

import LoginService from '../services/LoginService';


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }


    login = (e) => {
        e.preventDefault();
        let credentials = { email: this.state.email, password: this.state.password };
        LoginService.userLogin(credentials).then(res => {
            console.log("res =>" + JSON.stringify(res));
            this.context.history.push('/path')
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="w-50 text-center mx-auto p-3 mt-2">
                        <form>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.changeEmail}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.changePassword}
                                />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary mb-3" onClick={this.login}>
                                    Submit
                                </button>
                                <button className="btn btn-danger" onClick={this.cancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;