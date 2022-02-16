import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { RequestProvider } from './Context/RequestContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RequestProvider>
        <App />
      </RequestProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


