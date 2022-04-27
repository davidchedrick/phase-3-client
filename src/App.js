// import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
// import Loading from "./Loading";

import StatsArea from "./StatsArea";
import TaskArea from "./TaskArea";

function App() {
  const [tasks, setTasks] = useState([]);
  const [fetchRequest, setFetchRequest] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const BASE_URL = "";

  useEffect(() => {
    fetchTasks();
  }, [fetchRequest]);

  function fetchTasks() {
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((tasks) => {
        setTasks(tasks);
        setIsLoaded(true);
        setFetchRequest(false);
      });
  }

  // if (!isLoaded) return <h2><Loading /></h2>;

  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}

      <div className="m-0">
        <Row className="m-0">
          <Col className="TaskArea p-0" sm={10}>
            <TaskArea tasks={tasks} />
          </Col>

          <Col className="p-0" sm={2}>
            <StatsArea />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
