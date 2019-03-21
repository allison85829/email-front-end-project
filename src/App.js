import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import store from './store.js';
import { Container, Navbar, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';
import CreateEmail from './components/CreateEmail';


class App extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">

        <Router>
          <div>
          <Navbar expand="lg" variant="dark" bg="dark">
            <Col sm={6}> <Link to="/"> <h3> List </h3>  </Link>  </Col>
            <Col sm={6} > <Link to="/createEmail"> <h3> Create </h3>  </Link>  </Col>   
          </Navbar>

          
          <Route exact path="/" component={EmailList} />
          <Route path="/email/:id" component={EmailDetail} />
          <Route path="/createEmail" component={CreateEmail}/>

          </div>
        </Router> 
        </div>
      </Provider>
    );
  }
}

export default App;
