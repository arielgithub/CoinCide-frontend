import 'core-js/fn/object/assign';
import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/body/Main';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import insertAds from './components/body/insertAds'
import SearchAds from './components/body/searchAds'
import AdsDetail from './components/body/adsDetail'
import AuthService from './utility/AuthService'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './utility/AuthService'
import Login from './components/commons/login'


// Render the main component into the dom
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login'/*, state: {from: props.location}*/}} />}
      />
    )
  }

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route path="/login" component={Login}/>
        <PrivateRoute authed={(isLoggedIn())} path="/" component={App}/>
        <PrivateRoute authed={(isLoggedIn())} path="/insertAds" component={insertAds}/>
        <PrivateRoute authed={(isLoggedIn())} path="/searchAds" component={SearchAds}/>
        <PrivateRoute authed={(isLoggedIn())} path="/adsDetail/:id" component={AdsDetail}/>
    </div>
    </BrowserRouter>,
    document.getElementById('app')
);

