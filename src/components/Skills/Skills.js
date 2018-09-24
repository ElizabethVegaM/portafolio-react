import React, { Component } from 'react';
import SkillIcon from './SkillIcon';
import { Container, Row, Col } from 'react-grid-system';
import './style.css';

class Skills extends Component {
  render() {
    const skills = ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-react', 'fab fa-git', 'fab fa-node', 'fab fa-npm'];
    return (
      <Col md={12} className="skills">
        <h3>Skills</h3>
        <Col md={8} offset={{ md: 2 }}>
          {
            skills.map(element => <SkillIcon icon={element} />)
          }
        </Col>

      </Col>
    )
  }
};

export default Skills;