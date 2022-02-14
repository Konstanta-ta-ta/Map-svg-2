import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dict} from "./Dict";
import reportWebVitals from './reportWebVitals';
import {NameLocation} from "./NameLocation";

ReactDOM.render(
  <React.StrictMode>
      <NameLocation />
      <Dict />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();