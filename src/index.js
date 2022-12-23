import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, subscribe, updateNewPostText } from './Redux/state.js';
import { addMessage } from './Redux/state.js';
import state from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let reRendererTree = (state) => {

    root.render(
        <React.StrictMode>
            <App appState={state} 
            addPost={addPost} 
            addMessage={addMessage} 
            updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    );
}

reRendererTree(state);

subscribe(reRendererTree);


reportWebVitals();
