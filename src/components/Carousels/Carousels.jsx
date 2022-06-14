import { Carousel } from "react-bootstrap";
import "./Carousels.css";
function Carousels() {
  const data = [
    {
      link: "https://live.staticflickr.com/65535/52065672153_a5044ae1a0_k.jpg",
      title: "1 label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      link: "https://live.staticflickr.com/65535/52065651886_54cd879f2c_k.jpg",
      title: "2 label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      link: "https://live.staticflickr.com/65535/52065661001_7ecf84e432_k.jpg",
      title: "3 label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      link: "https://live.staticflickr.com/65535/52065889424_53c877c52d_k.jpg",
      title: "4 label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      link: "https://live.staticflickr.com/65535/52065657996_1c57a2f402_k.jpg",
      title: "5 label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  const dataList = data.map((i, k) => (
    <Carousel.Item interval={1000} key={k}>
      <img className="d-block w-100" src={i.link} alt="First slide" />
      <Carousel.Caption>
        <h3>{i.title}</h3>
        <p>{i.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <Carousel fade>{dataList}</Carousel>
    </>
  );
}
export default Carousels;
