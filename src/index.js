import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux"
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import store from "./store"


store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
