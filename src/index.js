//twee onderstaande regels moeten altijd bovenaan staan
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import App from './components/App';
import AppRouter from "./routers/AppRouter";

const jsx = (
    <AppRouter />
);

ReactDOM.render(jsx, document.getElementById("root"));


