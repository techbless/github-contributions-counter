import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Result from './Result';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Result/:uname" component={Result}/>
      </div>
    </Router>
  );
};

export default App;