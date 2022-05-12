import { useContext,  useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useHistory  } from "react-router-dom";
import { LogInContext } from '../context/user';
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
  const [currentPoints, setCurrentPoints] = useState(null);
  
  console.log('currentPoints: ', currentPoints);
  // const [fetchRequest, setFetchRequest] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logIn] = useContext(LogInContext);
  
  const history = useHistory();
  // const [user, setUser] = useContext(UserContext);
  const BASE_URL = "http://localhost:9292";
  
  // useEffect(() => {
  //   fetchTask();
  // }, [fetchRequest]);

  function fetchChildren(currentUser) {
    
    
    fetch(BASE_URL + `/users/${currentUser.id}`)
      .then((resp) => resp.json())
      .then((children) => {
        
       
        checkChildren(children);
        setIsLoaded(true);
        //setFetchRequest(false);
      });
  }

  function checkChildren(children){
   
    if (children)
    
    setChildren(children)
  }

  function fetchTask(selectChild) {
    
    
    
    fetch(BASE_URL + `/children/${selectChild.id}`)
      .then((resp) => resp.json())
      .then((task) => {
        checkTask(task);
        setIsLoaded(true);
        setCurrentPoints(task.points)
        //setFetchRequest(false);
      });
  }

  function checkTask(task){
    
    
    if (task)
    

    setTasks(task.tasks)
  }
  

  function handleDeleteTask(currentTask) {
    fetch(BASE_URL + `/tasks/${currentTask.id}`, {
        method: "DELETE"
    })
    const updatedTask = tasks.filter((task) => task.id !== currentTask.id);
    setTasks(updatedTask);

    updatePoints(currentTask)
    // history.push("/");
  }

  function updatePoints(currentTask) {

    setCurrentPoints( currentPoints + currentTask.value)

    fetch(BASE_URL + `/children/${currentTask.child_id}/points`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ points: currentPoints }),
    })
      .then((resp) => resp.json())
      .then((currentPoints) => {
        
        console.log('currentPoints:AFTER ', currentPoints);
        // setCurrentPoints(currentPoints)
      });    
    
  }

  if(!logIn){
    return(
        <div  className='App'>
          <LogIn fetchChildren={fetchChildren}/>
        </div>
    )
  }

  
  // function init(user){
  //   fetchChildren(user)
  // }
  


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

        <Route path="/LogIn">
          <LogIn fetchChildren={fetchChildren}/>
        </Route>

        <Route path="/UserArea">
          <UserArea 
            setTasks={setTasks}
            setChildren={setChildren}
          />
        </Route>


        <Route path="/">
          <div className="m-0">
            <Row className="m-0">

              <Col className="TaskArea p-0" sm={10}>
                <TaskArea 
                userChildren={children}
                tasks={tasks} 
                handleDeleteTask={handleDeleteTask}
                fetchTask={fetchTask}
                />
              </Col>

              <Col className="p-0" sm={2}>
                <StatsArea 
                  currentPoints={currentPoints}
                />
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
