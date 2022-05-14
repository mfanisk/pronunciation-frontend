import React, { Component } from 'react';

import { Table, InputGroup, FormControl, Button  } from "react-bootstrap";

import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

class ManageUsersList extends Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <FormControl aria-label="First name" />
                    <InputGroup.Text>Last Name</InputGroup.Text>
                    <FormControl aria-label="Last name" />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
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
                            <td>Username1</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Pronounciation Audio File</td>
                            <td><UpdateButton /></td>
                            <td><DeleteButton /></td>
                        </tr>
                        <tr>
                            <td>Username2</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Audio File</td>
                            <td><UpdateButton /></td>
                            <td><DeleteButton /></td>
                        </tr>
                        <tr>
                            <td>Username3</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Audio File</td>
                            <td><UpdateButton /></td>
                            <td><DeleteButton /></td>
                        </tr>
                        <tr>
                            <td>Username4</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Audio File</td>
                            <td><UpdateButton /></td>
                            <td><DeleteButton /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ManageUsersList;