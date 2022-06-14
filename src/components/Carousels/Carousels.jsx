import { Carousel } from "react-bootstrap";
function Carousels() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            fluid
            className="d-block w-100"
            src="https://media.titus.de/media/image/59/e6/ef/18-01-Almost_1920x1920.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            fluid
            className="d-block w-100"
            src="https://media.titus.de/media/image/43/80/f6/18-03-Independent_1920x1920.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            fluid
            className="d-block w-100"
            src="https://media.titus.de/media/image/2e/71/f3/18-01-Spitfire_1920x1920.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            fluid
            className="d-block w-100"
            src="https://media.titus.de/media/image/ff/d4/55/Levis_1800x750_1920x1920.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Carousels;
