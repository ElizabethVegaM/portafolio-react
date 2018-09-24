import React, { Component } from 'react';
import Image from '../common/Image';
import HeaderButton from './HeaderButtons';
import './style.css';

class Header extends Component {
  render() {
    const buttons = ['About Me', 'Skills', 'Portfolio'];
    return (
      <div className="header">
        <h1>Elizabeth Vega Medina</h1>
        <p>Front-End Developer</p>
        <Image className="header-banner" />
        <div className="header-btn">
          {
            buttons.map(element => <HeaderButton name={element} />)
          }
        </div>
      </div>
    )
  }
};

export default Header;