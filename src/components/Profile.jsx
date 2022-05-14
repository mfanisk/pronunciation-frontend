import React, { Component } from 'react';

import { Table } from "react-bootstrap";

import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

class Profile extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Pronounciation</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>My First Name</td>
                            <td>My Last Name</td>
                            <td>My Pronounciation Audio File</td>
                            <td><UpdateButton /></td>
                            <td><DeleteButton /></td>   
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Profile;