import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductScreen from "./screens/ProductScreen";
import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <Router>
                <Header />
                <main>
                    <Container
                        style={{
                            margin: "0",
                            // width: "100vw",
                            padding: "0",
                        }}
                        fluid
                    >
                        <Route path="/product/:id" component={ProductScreen} />
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
