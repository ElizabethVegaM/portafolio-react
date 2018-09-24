import React, { Component } from 'react';
import SkillIcon from './SkillIcon';

class Skills extends Component {
  render() {
    const skills = ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-react', 'fab fa-git', 'fab fa-node', 'fab fa-npm'];
    return (
      <div className="skills">
        <h3>Skills</h3>
        {
          skills.map(element => <SkillIcon icon={element} />)
        }
      </div>
    )
  }
};

export default Skills;