require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/searchAds.css')

import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'react-item-list';

import { ListGroup, ListGroupItem } from 'reactstrap';


class insertAdsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                FLEX INSERISCI QUI IL TUO CODICE
      </div>
        );
    }
}

insertAdsComponent.defaultProps = {
};


export default insertAdsComponent;
