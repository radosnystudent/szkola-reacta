import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./styles/screens.scss";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Router>
                <Header />
                <main>
                    <Container
                        style={{
                            margin: "0",
                            width: "100%",
                            padding: "0",
                        }}
                    >
                        <Route path="/" exact component={Homescreen} />
                    </Container>
                </main>
                <Footer />
            </Router>
        </>
    );
};

//className="py-3"

export default App;
