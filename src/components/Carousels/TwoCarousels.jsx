import { Row, Col } from "react-bootstrap";
import "./TwoCarousels.css";
import Carousels from "../../components/Carousels/Carousels";
function TwoCarousels() {
  return (
    <>
      <Row className="two_carousels">
        <Col>
          <Carousels />
        </Col>
        <Col>
          <Carousels />
        </Col>
      </Row>
    </>
  );
}

export default TwoCarousels;
