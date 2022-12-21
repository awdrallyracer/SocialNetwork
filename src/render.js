import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './Redux/state.js';
import { addMessage } from './Redux/state.js';


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

reportWebVitals();

export default reRendererTree;