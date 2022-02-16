import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DailyIframe from "@daily-co/daily-js";
import BrowserUnsupported from './components/BrowserUnsupported/BrowserUnsupported';


ReactDOM.render(
  DailyIframe.supportedBrowser().supported ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <BrowserUnsupported />
  ),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
