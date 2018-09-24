import React, { Component } from 'react';
import Image from '../common/Image';
import banner from '../../img/banner.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Image img={banner} className="footer-img" />
      </footer>
    )
  }
};

export default Footer;