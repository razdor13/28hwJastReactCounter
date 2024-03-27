import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx"; // Use .js extension
import "./style/style.scss";
import store from "./redux/store.js";



const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
    <Provider store={store}>
        <App />
    </Provider>
);
