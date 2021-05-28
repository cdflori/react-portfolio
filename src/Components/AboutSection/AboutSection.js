import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

export default function AboutSection() {
  return (
    <section className="jumboContainer container">
      <div className="aboutContainer">
          <h3>Text Here</h3>
      </div>
      <div className="aboutContainer">
          <Row className="flexyBox">
            <Col>
              <button className="skillBtn"><FontAwesomeIcon icon="react"/>REACT</button>
            </Col>
            <Col>
              <button className="skillBtn">JavaScript</button>
            </Col>
            <Col>
              <button className="skillBtn">GitHub</button>
            </Col>
            <Col>
              <button className="skillBtn">Node.js</button>
            </Col>
            <Col>
              <button className="skillBtn">NPM</button>
            </Col>
          </Row>
      </div>
    </section>
  );
}
