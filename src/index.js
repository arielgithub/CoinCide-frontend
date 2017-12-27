import 'core-js/fn/object/assign';
import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/body/Main';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Render the main component into the dom
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
