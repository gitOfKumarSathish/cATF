import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./../node_modules/font-awesome/css/font-awesome.min.css";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios'
import { Provider } from 'react-redux';
import store from './components/store/globalStore';
// Note: Initialising the baseURL of axios provider
if(process.env.REACT_APP_ENV === 'prod') {
  /************* Base URL for production mode ************/
  axios.defaults.baseURL = window.location.origin + '/api/v1';
} else {
  /************* Base URL for development mode ************/
  axios.defaults.baseURL = process.env.REACT_APP_ATF_SERVER + '/api/v1';
}


const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
reportWebVitals();



