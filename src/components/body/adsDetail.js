require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'react-item-list';
import {
    ListGroup, ListGroupItem, Button, FormGroup, Input,
    Label, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Moment from 'moment';


class Offer extends Component {
    render() {
        let itemData = this.props.itemData;
        return <ListGroupItem className="top-buffer-10">
            <div className="row">
                <div className="col-md-10">{itemData.id} - {itemData.title} <br /> {itemData.description}
                </div>
                <div className="col-md-1 text-right">
                    <Button color="primary linkClass">
                        Accetta
                    </Button>
                </div>
                <div className="col-md-1 text-right">
                    <Button color="primary linkClass">
                        Rifiuta
                    </Button>
                </div>
            </div>
        </ListGroupItem>
    }
}


class AdsDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: {
            },
            offers: {
                list: [],
                pag: 1,
                totPag: 1,
                npe: 5,
                tote: 0,
                paginator: []
            }
        }
    }
    componentDidMount() {
        this.getAdsPag();
        this.getOffersByAds(this.state.offers.pag, this.state.offers.npe);
        this.countOffersByAds(this.state.offers.npe);
    }

    getAdsPag() {
        var self = this;
        axios.get('http://localhost:3000/api/ads/' + this.props.match.params.id).then(res => {
            self.state.ads = res.data;
            self.setState(self.ads)
        }).catch((error) => {
            //console.log("error", error) Gestione dei log?
        })
    }

    getOffersByAds(pag, numPerPag) {
        var self = this;
        axios.get('http://localhost:3000/api/offers/getOffersByAds', {
            params: {
                id_ad: this.props.match.params.id,
                pagina: pag,
                numElementPerPage: numPerPag
            }
        })
            .then(res => {
                self.state.offers.list = res.data;
                self.setState(self.offers)
            }).catch((error) => {
                //console.log("error", error) Gestione dei log?
            })
    }


    countOffersByAds(numPerPag) {
        var self = this;
        axios.get('http://localhost:3000/api/offers/countOffersByAds', {
            params: {
                id_ad: this.props.match.params.id,
                numElementPerPage: numPerPag
            }
        })
            .then(res => {
                self.state.offers.tote = res.data.total;
                self.state.offers.totPag = res.data.pages;
                self.createPaginator(self.state.offers.totPag);
                self.setState(self.offers)
            }).catch((error) => {
                //console.log("error", error) Gestione dei log?
            })
    }


    createPaginator(totPag) {
        var self = this;
        this.state.offers.paginator.push(<PaginationItem><PaginationLink previous href="#" /></PaginationItem>);
        var i;
        for (i = 1; i <= totPag; i++) {
            this.state.offers.paginator.push(<PaginationItem><PaginationLink key={i} onClick={self.changePage.bind(this, i)}>{i}</PaginationLink></PaginationItem>);
        }
        this.state.offers.paginator.push(<PaginationItem><PaginationLink next href="#" /></PaginationItem>);
    }

    changePage(page) {
        var self = this;
        this.getOffersByAds(page, this.state.offers.npe);
        this.setState(self.offers);
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ListGroup>
                        <ListGroupItem>
                            <div className="row">
                                <div className="col-md-9">
                                    {this.state.ads.title}
                                </div>
                                <div className="col-md-3 text-right">
                                    Data scadenza:
                                        {Moment(this.state.ads.expiration_date).format('DD/MM/YYYY')}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    {this.state.ads.description}
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button color="primary">
                                <Link className="linkClass" to="/searchAds">Torna Indietro</Link>
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-md-12 text-center">
                    Offerte:
                </div>
                <div className="col-md-12 text-center">
                    <List className="list-group" items={this.state.offers.list} ListItem={Offer} />
                    <Pagination className="top-buffer top-buffer-10">
                        {this.state.offers.paginator}
                    </Pagination>
                </div>
            </div>
        );
    }
}

AdsDetailComponent.defaultProps = {
};


export default AdsDetailComponent;
