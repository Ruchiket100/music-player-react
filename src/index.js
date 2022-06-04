import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// components -
// stateless
// stateful (or both) - React-createClass & ES2015 class

// functional component cannot have state within
// React props are immutable means they cannot cahnge once they are declared by main parent 
// only when parent element change then the react will render part which is change by new props over old

