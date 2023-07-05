import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Dive Tools App</title>
      <meta
        name="description"
        content="Site de réservation et de maintenance du matériel de plongée, pour une utilisation interne à une association ou à un club"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);
