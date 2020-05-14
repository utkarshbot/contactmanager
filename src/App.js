import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import NotFound from './components/pages/NotFound';
import Test from './components/Test/Test';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App left">
          <Header branding='Contact Manager' />
          <div className="container">
            <Switch>
              <Route exact path ='/' component = {Contacts}/>
              <Route exact path ='/contact/add' component = {AddContact}/>
              <Route exact path ='/contact/edit/:id' component = {EditContact}/>
              <Route exact path ='/about' component = {About}/>
              <Route exact path = '/test' component = {Test}/>
              <Route component ={NotFound}/>
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

