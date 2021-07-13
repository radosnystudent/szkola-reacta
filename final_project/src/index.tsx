import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import "./styles/index.scss";
import "./styles/screens.scss";
import "./styles/components.scss";
import "./bootstrap.min.css";

const { worker } = require("./mocks/browser");
worker.start({ onUnhandledRequest: "bypass" });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
