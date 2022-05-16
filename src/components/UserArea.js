import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Dropdown, DropdownButton, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext, LogInContext } from "../context/user";


function UserArea({ setTasks, children, setChildren, setCurrentPoints }) {
    const [addingChild, setAddingChild] = useState(false)
    const [addingTask, setAddingTask] = useState(false)
    const [starPoints, setStarPoints] = useState(0)
    const [user, setUser] = useContext(UserContext);
    const [childData, setChildData] = useState({
        name: "",
    })
    const [logIn, setLogIn] = useContext(LogInContext);

    const history = useHistory();

    function handleLogOut() {
        setLogIn(false);
        setUser([]);
        setChildren([]);
        setTasks([]);
        setCurrentPoints(null);
        history.push("/LogIn");
    }

    function startAddTask() {
        setAddingTask(addingTask => !addingTask)
        setAddingChild(false)
    }

    function startAddChild() {
        setAddingChild(addingChild => !addingChild)
        setAddingTask(false)
    }

    function addNewChild(newChild) {
        console.log('newChild: ', newChild);
        fetch("http://localhost:9292/children", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newChild),
          })
      .then((resp) => resp.json())
      .then((child) => {
        console.log(child);
      })
    }

    function deleteUser() {
       

    }

    function handleChildData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setChildData({
            
        ...childData,
        [targetName]: targetValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newChild ={
            
            ...childData,
            points: 0,
            user_id: user.id
        }
       
        addNewChild(newChild);

        setChildData({
            name: "",
        });

    }

    const childList = children.children.map(child => (
        <Dropdown.Item key={child.id} value={child.id}>{child.name}</Dropdown.Item>
    ))
   
   
    return (
        <div>
            <div>{logIn ? `Welcome, ${user.username} ` : ""}</div>

            <div className="UserArea p-3">
                <div className="d-flex justify-content-between">
                    
                <ButtonGroup>
                    <Button onClick={startAddChild}>Add Child</Button>
                    <Button onClick={startAddTask}>Add Tasks</Button>
                    
        
                <ButtonGroup className="ms-5 ">
                    <Button onClick={deleteUser}>Delete Account</Button>
                </ButtonGroup>

                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={handleLogOut}>Log Out</Button>

                </ButtonGroup>
            </div>
            
                {addingChild ? 
                 (
                        <form className="p-3 mt-2" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Child Name"
                                name="name"
                                onChange={handleChildData}
                            />
                            
                            <input type="submit"></input>
                        </form>
                    )
                : null}
                
                {addingTask ? 
                 (
                    <InputGroup className="mb-3">
                    <DropdownButton
                      variant="outline-secondary"
                      title="Child"
                      id="input-group-dropdown-1"
                    >
                      {childList}
                    </DropdownButton>
                    <DropdownButton
                      variant="outline-secondary"
                      title="Task"
                      id="input-group-dropdown-1"
                    >
                            <Dropdown.Item href="Make Bed">Make Bed</Dropdown.Item>
                            <Dropdown.Item href="Read Book">Read Book</Dropdown.Item>
                            <Dropdown.Item href="Clean Room">Clean Room</Dropdown.Item>
                            <Dropdown.Item href="Feed Pet">Feed Pet</Dropdown.Item>
                            <Dropdown.Item href="Set Plates">Set Plates</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                      variant="outline-secondary"
                      title="⭐ Value"
                      id="input-group-dropdown-1"
                    >
                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                <td>{starPoints}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Form.Range min="0" max="20" />    
                    </DropdownButton>
                    
                  </InputGroup>
                    )
                : null}
             </div>
        </div>
    );
}

export default UserArea;
