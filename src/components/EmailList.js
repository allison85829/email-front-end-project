import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../actions/actionCreator.js';
import { Container, ListGroup, ListGroupItem, Row, Col, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Emails.css';
class EmailList extends Component {
  componentWillMount() {
    this.props.getEmail();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newEmail) {
      this.props.emails.unshift(nextProps.newEmail);
    }
  }

  render() {

    const emailList = this.props.emails.map(email=> (
      <ListGroupItem key={email.id}> 
      <Row>
          <div className="col-6 custom-control custom-checkbox">
            <input type="checkbox" className="col-2 custom-control-input" id={email.id} /> 
            <Link to={{pathname: "/email/" + email.id,
                      state: { email: email }}}>
            <label className="col custom-control-label"> 
                {email.from}
            </label>
            </Link>
          </div>
        <div className="col"> {email.subject} </div>
      </Row>
      </ListGroupItem>  
    ));

    return (
      <div className="myContainer">

        <Container>
          <ListGroup>
            {emailList}
          </ListGroup>

          <div className="text-right">
            <Button variant="danger"> DELETE </Button>
          </div>
        </Container>

      </div>
      
    );
  }
}

EmailList.propTypes = {
  getEmail: PropTypes.func.isRequired,
  emails: PropTypes.array.isRequired,
  newEmail: PropTypes.object
};

const mapStateToProps = state => ({
  emails: state.Email.items,
  newEmail: state.Email.item
});

export default connect(
  mapStateToProps,
  { getEmail }
)(EmailList);