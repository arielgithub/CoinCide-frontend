require('normalize.css/normalize.css');
require('styles/Footer.css');

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    return (
        <div className="footer">
        <div >Ariel Esteban Solis & Flavio Cordari</div>
      </div>
    );
  }
}

FooterComponent.defaultProps = {
};

export default FooterComponent;
