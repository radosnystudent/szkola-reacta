import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from "redux"

import App from "./App";

import "./styles/index.scss";
import "./styles/screens.scss";
import "./styles/components.scss";
import "./bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
