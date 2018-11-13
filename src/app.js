'use strict';

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Songs } from "./components/songs";
import { NotFound } from "./components/notFound";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends BrowserRouter {

  render() {
    return (
      <Router history={history}>
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
      </Router >
    );
  }
}

export default App;
