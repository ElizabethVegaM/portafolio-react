import React, { Component } from 'react';
import Image from '../common/Image';
import HeaderButton from './HeaderButtons';
import './style.css';
import banner from '../../img/banner.png';
import title from '../../img/logo.png';

class Header extends Component {
  render() {
    const buttons = ['About Me', 'Skills', 'Portfolio', 'Contact'];
    return (
      <header className="header">
        <Image img={banner} className="banner" />
        <Image img={title} className="name-logo" />
        <div className="header-btn">
          {
            buttons.map(element => <HeaderButton name={element} />)
          }
        </div>
      </header>
    )
  }
};

export default Header;