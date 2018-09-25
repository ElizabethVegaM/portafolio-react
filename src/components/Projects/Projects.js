import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectFormat from './ProjectFormat';
import './style.css';

class Projects extends Component {
  render() {
    return (
      <Col md={12} className="projects">
        <h3>Projects</h3>
        <Row className="projects-container">
          <ProjectFormat />
          <ProjectFormat />
          <ProjectFormat />   
        </Row>
      </Col>
    )
  }
};

export default Projects;