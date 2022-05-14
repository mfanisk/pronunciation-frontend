import React, { Component } from 'react';

import { Tabs, Tab } from "react-bootstrap";
import Profile from "./Profile";
import UsersList from "./UsersList";
import ManageUsersList from "./ManageUsersList";
class Dashboard extends Component {
    render() {
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