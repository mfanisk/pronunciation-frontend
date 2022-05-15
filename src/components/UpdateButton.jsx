import React, { Component } from 'react';

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class UpdateButton extends Component {
    render() {
        return (
            <div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                    <Button variant="success" type="submit" >
                        Submit
                    </Button>
                </Form.Group>
            </div>
        );
    }
}

export default UpdateButton;