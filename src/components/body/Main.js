require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'react-item-list';
import {Link} from 'react-router-dom'

import { ListGroup, ListGroupItem } from 'reactstrap';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adses: []
    }
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/searchAds">Ricerca Annunci</Link></li>
          <li><Link to="/insertAds">Inserisci Annuncio</Link></li>
        </ul>

        <div><h1>Do you want Coin? SWAP! with community</h1></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
