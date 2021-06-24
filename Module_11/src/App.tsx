import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import UserScreen from "./screens/UserScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import Message from "./containers/Message";

import "./styles/styles.scss";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Route path="/contactform" component={ContactScreen} />
                <Route path="/users" component={UserScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Router>
            <Message />
        </div>
    );
};

export default App;
