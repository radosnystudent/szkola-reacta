import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DialogboxPage from "./pages/Dialogbox/Dialogbox";
import SnackbarPage from "./pages/Snackbar/Snackbar";
import Users from "./pages/Users/Users";
// import User from "./components/UserContainer/User";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/dialogbox">
                        <DialogboxPage />
                    </Route>
                    <Route path="/snackbar">
                        <SnackbarPage />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/user-profile">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
