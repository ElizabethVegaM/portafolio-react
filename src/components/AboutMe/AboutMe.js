import React from 'react';
import './style.css';
import Image from '../common/Image';
import logo from '../../img/mini-logo.png';
import { Container, Row, Col } from 'react-grid-system';

const AboutMe = () => {
  return(
    <Container>
        <h3>About Me</h3>
      <Col>
        <Image img={logo} className="mini-logo" />
      </Col>
      <Col>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis commodo nulla. Sed pulvinar est dolor, ut placerat nibh luctus ut. Proin hendrerit lectus at erat ornare maximus. Fusce eget urna interdum, dignissim orci a, posuere lacus. Mauris id odio elementum augue porta eleifend. Sed quam erat, efficitur in ipsum at, sagittis molestie nunc. Nunc ultrices, ante consectetur hendrerit facilisis, massa est rhoncus dui, non pretium diam leo placerat nibh.
        </p>
      </Col>   
    </Container>
  )
}

export default AboutMe;