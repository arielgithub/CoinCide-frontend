require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'react-item-list';
import {
  ListGroup, ListGroupItem, Button, FormGroup, Input,
  Label, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';


class Ads extends Component {
  render() {
    let itemData = this.props.itemData;
    return <ListGroupItem><div>{itemData.title} <br /> {itemData.description}
      <Button color="primary">Dettaglio</Button>
    </div></ListGroupItem>
  }
}

class SearchAdsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adses: {
        list: [],
        pag: 1,
        npe: 10,
        tot: 0
      }
    }
  }

  componentDidMount() {
    this.getAdsPag(this.state.adses.pag, this.state.adses.npe);
  }

  getAdsPag(pag, numPerPag) {
    var self = this;
    axios.get('http://localhost:3000/api/ads/getAdsPag', {
      params: {
        pagina: pag,
        numElementPerPage: numPerPag
      }
    })
      .then(res => {
        self.state.adses.list = res.data;
        self.setState(self.adses)
      }).catch((error) => {
        //console.log("error", error) Gestione dei log?
      })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <ListGroup>
            <ListGroupItem className="row">Ricerca:
            <FormGroup className="col-md-6">
                <Label for="exampleSelect">Acquisto:</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>LTC</option>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>XRP</option>
                  <option>ADA</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="exampleSelect">Vendo:</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>LTC</option>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>XRP</option>
                  <option>ADA</option>
                </Input>
              </FormGroup>
            </ListGroupItem>
            <List items={this.state.adses.list} ListItem={Ads} />
            <Pagination>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
          </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
          </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
          </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
          </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
          </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </ListGroup>
        </div>
      </div>
    );
  }
}

SearchAdsComponent.defaultProps = {
};


export default SearchAdsComponent;
