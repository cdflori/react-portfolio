import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function Overview() {
  return (
    <section className="jumboContainer ">
      <div className="container">
        <Row id="about" className="headerRow">
          <h2 className="headerText">What I do</h2>
        </Row>
      </div>
      <div className="container">
        <Row>
          <Col className="containerCol">
            <Row>
              <i class="fas fa-laptop-code fa-3x workIcon" />
            </Row>
            <Row>
              <h2 className="subText">Front End Development</h2>
            </Row>
            <Row>
              <p className="text">
                Front End Development involves building out visual components on
                web applications. I use HTML, CSS , Javascript, and React to
                build fast, interactive websites. This also may include a CMS,
                API's or other integrations.
              </p>
            </Row>
          </Col>
          <Col className="containerCol">
            <Row>
              <i class="fas fa-magic fa-3x workIcon" />
            </Row>
            <Row>
              <h2 className="subText">UI/UX Design</h2>
            </Row>
            <Row>
              <p className="text">
                UI/UX involves planning and iterating a site's structure and
                layout dependent on user/company preference. Once the proper
                information architecture is in place, I design the visual layer
                to create a beautiful user experience.
              </p>
            </Row>
          </Col>
          <Col className="containerCol">
            <Row>
              <i class="fas fa-project-diagram fa-3x workIcon" />
            </Row>
            <Row>
              <h2 className="subText">Product Development</h2>
            </Row>
            <Row>
              <p className="text">
                There is nothing better than bringing a fresh idea into the
                world. My work with PartiPug involves everything from Marketing
                and Graphic Design to E-Commerce, Logistics and Web Design. Do
                you have an idea I can help with?
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
