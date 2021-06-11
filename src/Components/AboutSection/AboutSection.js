import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

// import SkillCarousel from '../SkillCarousel/SkillCarousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

export default function AboutSection() {
  return (
    <section className="jumboContainer container">
      <div className="aboutContainer">
        <h3 className='subHeader'>What I am working with everyday!</h3>
      </div>
      {/* <div className="aboutContainer"> */}
        {/* <FontAwesomeIcon className= 'iconTest' icon={['fab', 'react']}/> */}
        <Row className="flexyBox">
          <Col>
            <button className="skillBtn">
              <i class="fab fa-react fa-4x icon"></i>
              REACT
            </button>
          </Col>
          <Col>
            <button className="skillBtn">
              <i class="fab fa-js-square fa-4x icon"></i>
              JAVASCRIPT
            </button>
          </Col>
          <Col>
            <button className="skillBtn">
              <i class="fab fa-github fa-4x icon"></i>
              GitHub
            </button>
          </Col>
          <Col>
            <button className="skillBtn">
              <i class="fab fa-node-js fa-4x icon"></i>
              Node.js
            </button>
          </Col>
        </Row>
        {/* </div> */}
        {/* <div className="aboutContainer"> */}
          <Row className="flexyBox">
          <Col>
            <button className="skillBtn">
              <i class="fab fa-npm fa-4x icon"></i>
              NPM
            </button>
          </Col>
            <Col>
              <button className="skillBtn">
                <i class="fab fa-html5 fa-4x icon"></i>
                HTML
              </button>
            </Col>
            <Col>
              <button className="skillBtn">
                <i class="fab fa-css3-alt fa-4x icon"></i>
                CSS
              </button>
            </Col>
            <Col>
              <button className="skillBtn">
                <i class="fab fa-git fa-4x icon"></i>
                GIT
              </button>
            </Col>
            <Col>
              <button className="skillBtn">
                <i class="fab fa-aws fa-4x icon"></i>
                NPM
              </button>
            </Col>
          </Row>
        {/* </div>  */}
        <br/>
    </section>
  );
}
