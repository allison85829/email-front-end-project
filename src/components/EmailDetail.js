import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmailDetail } from '../actions/actionCreator.js';
import { Container, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Emails.css';

class EmailDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.emailDetail) {
        this.props.emails.unshift(nextProps.emailDetail);
        }
    }

  render() {
    console.log("rendering email detail ");
    return (
        <div className="myContainer">
        <Container>
            <ListGroup>
                <ListGroupItem variant="info">
                    {"To: " + this.state.email.from}
                </ListGroupItem>

                <ListGroupItem variant="secondary">
                    {"Subject: " + this.state.email.subject}
                </ListGroupItem>

                <ListGroupItem>
                    {this.state.email.text}
                </ListGroupItem>


            </ListGroup>

            <div className="text-right">
                <Button variant="primary"> PREV </Button>
                <Button variant="primary"> NEXT </Button>
            </div>

        </Container>

        </div>
      
    );
  }
}

EmailDetail.propTypes = {
  getEmailDetail: PropTypes.func.isRequired,
  emails: PropTypes.array.isRequired,
  emailDetail: PropTypes.object
};

const mapStateToProps = state => ({
  emails: state.Email.items,
  emailDetail: state.Email.item
});

export default connect(
  mapStateToProps,
  { getEmailDetail }
)(EmailDetail);