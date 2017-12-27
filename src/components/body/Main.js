require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    var i = 0;
    this.map = [];
    for (var i = 0; i < 10; i++) {
      this.map.push(<ListGroupItem >{i}</ListGroupItem >);
    }
  }

  render() {
    return (
      <ListGroup>
        {this.map}
      </ListGroup>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
