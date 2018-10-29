import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../css/App.css';
import Header from './Header';
import Home from './Home';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Page' component={Page}/>
        </Switch>
      </div>
    );
  }
}

export default App;
