import React from 'react';
import './style.css';
import Image from '../common/Image';
import logo from '../../img/mini-logo.png';
import { Container, Row, Col } from 'react-grid-system';

const AboutMe = () => {
  return(
    <Col>
      <h3>About Me</h3>
      <Row>
        <Col md={5}>
          <Image img={logo} className="mini-logo" />
        </Col>
        <Col md={7}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis commodo nulla. Sed pulvinar est dolor, ut placerat nibh luctus ut. Proin hendrerit lectus at erat ornare maximus. Fusce eget urna interdum, dignissim orci a, posuere lacus. Mauris id odio elementum augue porta eleifend. Sed quam erat, efficitur in ipsum at, sagittis molestie nunc. Nunc ultrices, ante consectetur hendrerit facilisis, massa est rhoncus dui, non pretium diam leo placerat nibh.
          </p>
          <p>
            Phasellus laoreet elit in massa tempus, non finibus risus mollis. Maecenas nulla odio, placerat ac molestie vel, congue ac ligula. Proin gravida quam quis nisi bibendum facilisis. In at maximus mi, at porttitor nibh. Aenean in arcu efficitur purus lacinia vehicula. Vestibulum ante augue, vulputate vel erat et, cursus rhoncus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus at lorem ut consequat. Mauris id dignissim sapien, at posuere turpis. Nulla a lacus vestibulum, euismod tortor nec, vestibulum orci. Vestibulum malesuada odio purus, a convallis metus molestie sit amet. Cras volutpat tellus arcu, eget accumsan ante posuere lobortis. Duis ac tempus lacus, ac rutrum neque. Phasellus a velit hendrerit, vulputate dolor vel, iaculis elit. Suspendisse potenti. Aliquam eu cursus augue.
          </p>
        </Col>
      </Row>
    </Col>
  )
}

export default AboutMe;