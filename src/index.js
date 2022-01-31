import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import balanceReducer from "./reducer/balanceReducer";
import loanReducer from "./reducer/loanReducer";
import  thunk  from "redux-thunk";

const store = createStore(
  combineReducers({ balanceReducer, loanReducer }),
  applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
