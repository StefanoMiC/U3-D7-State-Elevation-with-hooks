import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(null);

  const changeSelected = newValue => {
    setSelected(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Table
                selected={selected} // READ
                triggerState={changeSelected} // WRITE
              />
              {/* f(){} */}
            </Col>
            <Col className="my-auto">
              <Detail selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default App;
