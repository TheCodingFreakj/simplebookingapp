import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./store/store";
import { initialState, bookTableReducer } from "./store/bookTableReducer";
ReactDOM.render(
  <StoreProvider initialState={initialState} reducer={bookTableReducer}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
