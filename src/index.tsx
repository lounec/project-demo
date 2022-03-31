import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container: HTMLElement | null = document.getElementById("root")!;

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
