import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Grid from './components/Grid/Grid';
import Footer from './components/Footer/Footer';
import Error from './components/Error';

class App extends Component { 
  render() {
    return (
      <Router>
        <div className="body">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
          <Grid />
          {/*<Footer />*/}
        </div>
      </Router>
    );
  }
}

export default App;