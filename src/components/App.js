import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useHistory  } from "react-router-dom";
import { LogInContext, UserContext } from '../context/user';
import "./App.css";
import Header from "./Header";
import Loading from "./Loading";
import LogIn from "./LogIn";

import StatsArea from "./StatsArea";
import TaskArea from "./TaskArea";
import UserArea from "./UserArea";

function App() {
  const [tasks, setTasks] = useState([]);
  const [fetchRequest, setFetchRequest] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logIn] = useContext(LogInContext);
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  console.log('user: ', user);
  const BASE_URL = "http://localhost:9292";

  useEffect(() => {
    fetchTasks();
  }, [fetchRequest]);

  function fetchTasks() {
    fetch(BASE_URL + "/tasks")
      .then((resp) => resp.json())
      .then((tasks) => {
        setTasks(tasks);
        setIsLoaded(true);
        setFetchRequest(false);
      });
  }

  function handleDeleteTask(id) {
    fetch(BASE_URL + `/tasks/${id}`, {
        method: "DELETE"
    })
    .then(setFetchRequest(fetchRequest => !fetchRequest))
    history.push("/");
}

if(!logIn){
  return(
      <div  className='App'>
         <LogIn />
      </div>
  )
}

  if (!isLoaded)
    return (
      <h2>
        <Loading />
      </h2>
    );

  return (
    <div className="App">

      <Header />

      <Switch>
        <Route path="/userArea">
          <UserArea />
        </Route>

        <Route path="/LogIn">
          <UserArea />
        </Route>

        <Route path="/">
          <div className="m-0">
            <Row className="m-0">

              <Col className="TaskArea p-0" sm={10}>
                <TaskArea 
                tasks={tasks} 
                handleDeleteTask={handleDeleteTask}
                />
              </Col>

              <Col className="p-0" sm={2}>
                <StatsArea />
              </Col>

            </Row>
          </div>
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
