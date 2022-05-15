import React, { Component } from 'react';

import { Tabs, Tab } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Profile from "./Profile";
import UsersList from "./UsersList";
import ManageUsersList from "./ManageUsersList";


class Dashboard extends Component {
    render() {
        if (!this.props.validUser) {
            return (
                <div>
                    <Card border="secondary">
                        <Card.Header>Welcome</Card.Header>
                        <Card.Body>
                            <Card.Title>Name Pronunciation Tool</Card.Title>
                            <Card.Text>
                                This tool can be used to listen employee name pronunciation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
        return (
            <div className="border">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="profile" title="Profile">
                        <Profile />
                    </Tab>
                    <Tab eventKey="users" title="Users">
                        <UsersList />
                    </Tab>
                    <Tab eventKey="manage" title="Manage">
                        <ManageUsersList />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Dashboard;