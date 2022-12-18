import './index.css';
import reportWebVitals from './reportWebVitals';
import reRendererTree from "./render.js";
import state from './Redux/state';

reRendererTree(state);

reportWebVitals();
