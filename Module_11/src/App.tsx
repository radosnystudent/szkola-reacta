import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Userscreen from './screens/Userscreen';
import Homescreen from './screens/Homescreen';
import './styles/styles.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <Route path="/users" component={Userscreen} />
          <Route exact path="/" component={Homescreen} />
      </Router>
    </div>
  );
}

export default App;
