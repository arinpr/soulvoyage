import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

const history = createBrowserHistory();

let app = document.getElementById('app');
// if (app) {
    // 1. Set up the browser history with the updated location
    // (minus the # sign)
    //console.log("main.jsx" + location.hash);
    const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
    if (path) {
        history.replace(path);
    }
// }

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home"/>);

ReactDOM.createRoot(
    document.getElementById("root"),
)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );