import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LoginService from '../services/LoginService';

LoginBox.propTypes = {
    setToken: PropTypes.func.isRequired
}

function LoginBox(props) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }


    function login(e) {
        e.preventDefault();
        let credentials = { email: email, password: password };
        LoginService.userLogin(credentials).then(res => {
            let token = res.data.accessToken;
            props.setToken(token);
            if(token === "Valid"){
                props.setValidUser(true)
            }
            navigate("/")
        });
    }

    function cancel(e) {
        navigate("/")
    }

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
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={changePassword}
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary mb-3" onClick={login}>
                                Submit
                            </button>
                            <button className="btn btn-danger" onClick={cancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default LoginBox;