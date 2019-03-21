import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../actions/actionCreator.js';
import { createEmail } from '../actions/actionCreator.js';
import { Card, CardBody, Button,
    Row, Col, Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import './Emails.css';

class CreateEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            subject: "",
            to: "",
            newEmail: undefined,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        let newState = {};
        this.setState({ [e.target.id] : e.target.value})
    }

    render() {
    console.log("rendering creating email");

    return (
        <div class="myContainer">
            <Card>
                <Card.Body>
                <Form>
                    <Form.Group>
                    <Form.Label>To: </Form.Label>
                    <Form.Control id="to" type="email"
                                onChange={this.handleChange}
                                value={this.state.to}
                                placeholder="someone@example.com" />

                    <Form.Label>Subject: </Form.Label>
                    <Form.Control id="subject" type="text"
                                onChange={this.handleChange}
                                value={this.state.subject}
                                placeholder="subject" />

                    <Form.Label> </Form.Label>
                    <Form.Control id="text" as="textarea"
                                onChange={this.handleChange}
                                value={this.state.text}
                                placeholder="start your message" />
                    </Form.Group>
                </Form> 

                <div className="text-right">
                    <Button variant="success"> SEND </Button>
                </div>
                
                </Card.Body>
            </Card>
        </div>
       
    );
  }
}

export default CreateEmail;