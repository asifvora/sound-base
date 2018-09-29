'use strict';

import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Songs } from "./components/songs";
import { NotFound } from "./components/notFound";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Songs} />
            <Route exact path="/songs" component={Songs} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
          <Footer />
        </div>
      </HashRouter >
    );
  }
}

export default App;
