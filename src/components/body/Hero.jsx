import { Row, Col } from "react-bootstrap";
import "./Hero.css";
import logo from "../../images/logo.PNG";
function Hero() {
  return (
    <>
      {" "}
      <Row>
        <Col>
          <img
            fluid
            className="d-block w-100 logo_resize logo_position"
            src={logo}
            alt="First slide"
          />
        </Col>
      </Row>
    </>
  );
}

export default Hero;
