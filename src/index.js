import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import rootReducer from "./store/reducers";
import App from './App';
import reportWebVitals from './reportWebVitals';

const logger = ({ getState }) => next => action => {
  console.log("Dispatching action:", action);
  next(action);
};
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer, 
  initialState,
  compose (
  applyMiddleware(...middleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// optional configuration
const options = {
  position: 'middle',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
