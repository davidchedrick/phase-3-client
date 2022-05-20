import { useHistory } from "react-router-dom";

import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
    Table,
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import Alert from "./Alert";
import DeleteChild from "./DeleteChild";

function UserArea({
    setTasks,
    children,
    setChildren,
    setCurrentPoints,
    rerender,
    setRerender,
}) {
    const BASE_URL = "http://localhost:9292";
    const [alert, setAlert] = useState(false);

    const [currentChild, setCurrentChild] = useState("");
    const [addingChild, setAddingChild] = useState(false);
    const [deletingChild, setDeletingChild] = useState(false);

    const [addingTask, setAddingTask] = useState(false);
    const [starPoints, setStarPoints] = useState(0);
    const [newChildTask, setNewChildTask] = useState(null);

    const [newChild, setNewChild] = useState({});
    const [user, setUser] = useContext(UserContext);
    const [taskData, setTaskData] = useState("");
    const [childData, setChildData] = useState({
        name: "",
    });
    const [createData, setCreateData] = useState({
        body: "",
        value: "",
        childId: "",
    });
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
        setAddingTask(addingTask => !addingTask);
        setAddingChild(false);
    }

    function startAddChild() {
        setAddingChild(addingChild => !addingChild);
        setAddingTask(false);
    }

    function addNewChild(newChild) {
        fetch(BASE_URL + `/children`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChild),
        })
            .then(resp => resp.json())
            .then(child => {
                setNewChild(child);
            });
    }

    function postTask(newTask) {
        fetch(BASE_URL + `/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then(resp => resp.json())
            .then(task => {
                console.log("task: ", task);
            });
    }

    function deleteUser() {
        setAlert(alert => !alert);
    }

    function deleteChild() {
        setDeletingChild(deletingChild => !deletingChild);
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

        const newChildObj = {
            ...childData,
            points: 0,
            user_id: user.id,
        };

        setNewChild(newChildObj);
    }

    useEffect(() => {
        addingChild ? handlePostChild() : console.log();
    }, [newChild]);

    function handlePostChild() {
        newChild.name.length > 1
            ? addNewChild(newChild)
            : console.log("child data empty");

        setChildData({
            name: "",
        });
        setAddingChild(false);
    }

    function createNewTask() {
        setCreateData({
            ...createData,
            body: taskData,
            value: starPoints,
            child_id: newChildTask,
        });
    }

    useEffect(() => {
        addingTask ? handlePostTask() : console.log();
    }, [createData]);

    function handlePostTask() {
        createData.body.length > 1
            ? postTask(createData)
            : console.log("log data");

        setCreateData({
            ...createData,
            body: "",
            value: "",
            child_id: "",
        });
        setTaskData("");
        setStarPoints("");
        setNewChildTask("");
        setAddingTask(false);
    }

    function handleNewChildTask(e) {
        setNewChildTask(e);
    }

    useEffect(() => {
        makeCurrentChild();
    }, [newChildTask]);

    //
    function makeCurrentChild() {
        const selectChild = children.children
            .filter(child => child.id == newChildTask)
            .map(child => child.name);

        setCurrentChild(selectChild);
    }

    function handleTaskData(e) {
        setTaskData(e);
    }

    const childList = children.children.map(child => (
        <Dropdown.Item eventKey={child.id} key={child.id}>
            {child.name}
        </Dropdown.Item>
    ));

    return (
        <div>
            <div>{logIn ? `Welcome, ${user.username} ` : ""}</div>

            <div className="UserArea p-3">
                <div className="d-flex justify-content-between">
                    <ButtonGroup>
                        <Button onClick={startAddChild}>Add Child</Button>
                        <Button onClick={startAddTask}>Add Tasks</Button>

                        <ButtonGroup className="ms-5 ">
                            <Button onClick={deleteChild}>Delete Child</Button>
                            <Button onClick={deleteUser}>Delete Account</Button>
                        </ButtonGroup>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button onClick={handleLogOut}>Log Out</Button>
                    </ButtonGroup>
                </div>

                {addingChild ? (
                    <form className="p-3 mt-2" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Child Name"
                            name="name"
                            onChange={handleChildData}
                        />

                        <input type="submit"></input>
                    </form>
                ) : null}

                {addingTask ? (
                    <div>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                variant="outline-secondary"
                                title="Child"
                                id="input-group-dropdown-1"
                                onSelect={handleNewChildTask}
                            >
                                {childList}
                            </DropdownButton>

                            <DropdownButton
                                variant="outline-secondary"
                                title="Task"
                                id="input-group-dropdown-1"
                                onSelect={handleTaskData}
                            >
                                <Dropdown.Item eventKey={"Make Bed"}>
                                    Make Bed
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Read Book"}>
                                    Read Book
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Clean Room"}>
                                    Clean Room
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Feed Pet"}>
                                    Feed Pet
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Set Plates"}>
                                    Set Plates
                                </Dropdown.Item>
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
                                <Form.Range
                                    min="0"
                                    max="20"
                                    value={starPoints}
                                    step="1"
                                    onChange={e =>
                                        setStarPoints(e.target.value)
                                    }
                                />
                            </DropdownButton>
                        </InputGroup>
                        <Container className="position-relative">
                            <Card className="position-absolute top-50 start-50 ranslate-middle-x">
                                <Card.Body className="p-0 ">
                                    {newChildTask ? (
                                        <h1>{currentChild}</h1>
                                    ) : null}
                                    <h1>⭐ {starPoints}</h1>
                                    <h1>{taskData}</h1>
                                </Card.Body>

                                <Button
                                    onClick={createNewTask}
                                    variant="primary"
                                    size="lg"
                                >
                                    Create Task
                                </Button>
                            </Card>
                        </Container>
                    </div>
                ) : null}

                {alert ? <Alert setAlert={setAlert} /> : null}

                {deletingChild ? (
                    <DeleteChild
                        setDeletingChild={setDeletingChild}
                        deletingChild={deletingChild}
                        userChildren={children}
                        setChildren={setChildren}
                        rerender={rerender}
                        setRerender={setRerender}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default UserArea;

    function NewTask({handleNewChildTask, childList, handleTaskData, starPoints, e, setStarPoints, newChildTask, currentChild, taskData, createNewTask}) {
      return (<div>
                        <InputGroup className="mb-3">
                            <DropdownButton variant="outline-secondary" title="Child" id="input-group-dropdown-1" onSelect={handleNewChildTask}>
                                {childList}
                            </DropdownButton>

                            <DropdownButton variant="outline-secondary" title="Task" id="input-group-dropdown-1" onSelect={handleTaskData}>
                                <Dropdown.Item eventKey={"Make Bed"}>
                                    Make Bed
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Read Book"}>
                                    Read Book
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Clean Room"}>
                                    Clean Room
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Feed Pet"}>
                                    Feed Pet
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={"Set Plates"}>
                                    Set Plates
                                </Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton variant="outline-secondary" title="⭐ Value" id="input-group-dropdown-1">
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <td>{starPoints}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Form.Range min="0" max="20" value={starPoints} step="1" onChange={e => setStarPoints(e.target.value)} />
                            </DropdownButton>
                        </InputGroup>
                        <Container className="position-relative">
                            <Card className="position-absolute top-50 start-50 ranslate-middle-x">
                                <Card.Body className="p-0 ">
                                    {newChildTask ? <h1>{currentChild}</h1> : null}
                                    <h1>⭐ {starPoints}</h1>
                                    <h1>{taskData}</h1>
                                </Card.Body>

                                <Button onClick={createNewTask} variant="primary" size="lg">
                                    Create Task
                                </Button>
                            </Card>
                        </Container>
                    </div>);
    }
  