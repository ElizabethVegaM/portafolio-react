import React, { Component } from 'react';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
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
            <Projects />
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default AppContainer;