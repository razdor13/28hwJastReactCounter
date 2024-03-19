import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx"; // Use .js extension
import "./style/style.scss";
import {createStore} from "redux";
import updateCount from "./actions/updateCount.js";

const initialState = {
    count: 10,
    initialCount: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_COUNT":
            return {
                ...state,
                count: action.payload,
            };
        default :
            return state
    }
};

const store = createStore(reducer, initialState);

const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
    <Provider store={store}>
        <App />
    </Provider>
);
