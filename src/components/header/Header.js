require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { isLoggedIn } from '../../utility/AuthService';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">CoinCide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                (!isLoggedIn()) ? (<NavItem>
                  <NavLink href="#">Sign Up</NavLink>
                </NavItem>) : ''
              }

              {
                (isLoggedIn()) ? (
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                      User
                </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        Profile
                  </DropdownItem>
                      <DropdownItem>
                        Settings
                  </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Transactions
                  </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : ''
              }

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
};

export default HeaderComponent;
