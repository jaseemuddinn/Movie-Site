import React from "react"
// import ReactDOM from "react-dom";  (not compatible with react 18)
import createRoot from 'react-dom'

import App from './App';

createRoot.render(<App />, document.getElementById('root'));
