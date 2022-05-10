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
  const [children, setChildren] = useState([]);
  const [fetchRequest, setFetchRequest] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logIn] = useContext(LogInContext);
  
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const BASE_URL = "http://localhost:9292";
  
  // useEffect(() => {
    
  //   fetchChildren();
  // }, [fetchRequest]);
// /tasks
  function fetchChildren(user) {
    console.log(user)
    fetch(BASE_URL + `/users/${user.id}`)
      .then((resp) => resp.json())
      .then((children) => {
        console.log('children:!!! ', children);

        //setChildren(children);
        // setIsLoaded(true);
        //setFetchRequest(false);
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

  
  if(logIn){
    fetchChildren(user)
  }


  // if (!isLoaded)
  //   return (
  //     <h2>
  //       <Loading />
  //     </h2>
  //   );

  

  return (
    <div className="App">

      <Header />

      <Switch>

        <Route path="/LogIn">
          <LogIn />
        </Route>

        <Route path="/UserArea">
          <UserArea />
        </Route>


        <Route path="/">
          <div className="m-0">
            <Row className="m-0">

              <Col className="TaskArea p-0" sm={10}>
                <TaskArea 
                children={children}
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
