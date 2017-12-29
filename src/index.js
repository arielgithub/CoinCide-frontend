import 'core-js/fn/object/assign';
import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/body/Main';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import insertAds from './components/body/insertAds'
import SearchAds from './components/body/searchAds'
import { BrowserRouter, Route } from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route path="/" component={App}/>
        <Route path="/insertAds" component={insertAds}/>
        <Route path="/searchAds" component={SearchAds}/>
    </div>
    </BrowserRouter>,
    document.getElementById('app')
);

