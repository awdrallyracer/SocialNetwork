import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state.js"
import { addPost } from './Redux/state.js';
import { addMessage } from './Redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appState={state} addPost={addPost} addMessage={addMessage} />
  </React.StrictMode>
);

reportWebVitals();
