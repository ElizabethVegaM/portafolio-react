import React from 'react';
import { Button } from 'react-materialize';
import Image from '../common/Image';
import sample from '../../img/888168_www_512x512.png';
import { Container, Row, Col } from 'react-grid-system';

const ProjectFormat = (props) => {
  return(
    <Col md={4} className="sample-container">
      <div className="image-container">
        <Image img={sample} className="project-sample" />
      </div>
      <Row className="info">
          <Button>CODE</Button>
          <Button>DEMO</Button>
        <div>
          <Button>+</Button>
        </div>
      </Row>
    </Col>
  )
};

export default ProjectFormat;