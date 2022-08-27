import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./components/app";

const container = document.getElementById("App");
ReactDOM.hydrateRoot(container, <App />);