import React, { Component } from 'react';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import { Container, Row, Col } from 'react-grid-system';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="main">
          <Aside />
          <Row>
            <AboutMe />
          </Row>
          <Row>
            <Skills />
          </Row>
          <Row>
            <Portfolio />
          </Row>
        <Footer />
        </Container>

      </div>
    )
  }
}

export default AppContainer;