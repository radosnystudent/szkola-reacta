import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import getRandomUsers from "./api/user";
import UserContainer from "./components/User/UserContainer";
import UserDetails from "./components/User/UserDetails";
import "./App.scss";

function App() {
    const [users, setUsers] = useState({});

    useEffect(() => {
        getRandomUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.log(error, " JSON error"));
    }, []);

    return (
        <>
            <Router>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/users/:userId">
                            <UserDetails users={users} />
                        </Route>
                        <Route path="/users">
                            <UserContainer users={users} />
                        </Route>
                        <Route path="/">
                            <UserContainer users={users} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
