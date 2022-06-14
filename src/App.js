import { Container } from "react-bootstrap";
import "./App.css";
import Body from "./screen/body/Body";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Body />
      </Container>
    </div>
  );
}

export default App;
