import React from 'react';
import ReactDOM from 'react-dom';
import './asserts/index.css';
import App from './Layout/App.jsx';
import {Store} from "./Store/Store.js";
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>)
, document.getElementById('root'));
registerServiceWorker();
