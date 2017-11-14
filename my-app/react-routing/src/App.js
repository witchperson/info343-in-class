import React, { Component } from 'react';

import { HashRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';

import SignUpView from "./components/Signup";
import SignInView from "./components/Signin";
import ChannelView from "./components/Channel";
import Constants from "./components/Constants";


/* <SignUpView/>
<SignInView/>
<ChannelView/> */
//router has only one child
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className = "jumbotron bg-dark">
          <h1 className = "display-3 text-light">React:Router Demo</h1>
        </header>
        <div className = "container">
          <div className = "row">
            <Router>
              <Switch>
                <Route exact path = {Constants.routes.signin} component={SignInView}/>
                <Route path = {Constants.routes.signup} component={SignUpView}/>
                <Route path = {Constants.routes.channel} component={ChannelView}/>
                <Redirect to={SignUpView}/>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
