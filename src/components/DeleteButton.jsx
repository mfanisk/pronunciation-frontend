import React, { Component } from 'react';

import { Button } from "react-bootstrap";

class DeleteButton extends Component {
    render() {
        return (
            <div>
                <Button variant="danger">Delete</Button>
            </div>
        );
    }
}

export default DeleteButton;