require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'react-item-list';

import { ListGroup, ListGroupItem } from 'reactstrap';


class Ads extends Component {
  render() {
    let itemData = this.props.itemData;
    return <ListGroupItem>T{itemData.title} <br /> {itemData.description} </ListGroupItem>
  }
}

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adses: []
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3000/api/ads')
      .then(res => {
        self.setState({ adses: res.data })
      }).catch((error) => {
        //console.log("error", error) Gestione dei log?
      })
  }

  render() {
    return (
      <div>
        Lista degli annunci:
      <ListGroup>
          <List items={this.state.adses} ListItem={Ads} />
        </ListGroup>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
