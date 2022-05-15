import React, { Component } from 'react';

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class UpdateButton extends Component {
    render() {
        return (
            <div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                    <Form.Control type="submit"/>
                </Form.Group>
            </div>
        );
    }
}

export default UpdateButton;