const [tasks, setTasks] = useState([]);
const [children, setChildren] = useState([]);

const [currentPoints, setCurrentPoints] = useState(null);
const [rerender, setRerender] = useState(false);

const [isLoaded, setIsLoaded] = useState(false);
// const [logIn] = useContext(LogInContext);

const BASE_URL = "http://localhost:9292";
//LogIN
const [formData, setFormData] = useState({
    username: "",
    password: "",
});
const [signInFailed, setSignInFailed] = useState(false);
const [allUsers, setAllUsers] = useState("");
const [user, setUser] = useContext(UserContext);
const [logIn, setLogIn] = useContext(LogInContext);
const history = useHistory();
// const BASE_URL = "http://localhost:9292";

useEffect(() => {
    fetchUsers();
}, [rerender]);




function fetchUsers() {
    fetch(BASE_URL + `/users`)
        .then(resp => resp.json())
        .then(users => setAllUsers(users));
}

function checkUser(userForm) {
    const currentUser = allUsers.filter(
        userData =>
            userData.username === userForm.username &&
            userData.password === userForm.password
    );
    currentUser[0] ? userIn(currentUser) : setSignInFailed(true);
}

function userIn(currentUser) {
    setUser(currentUser[0]);
    fetchChildren(currentUser[0]);
    setLogIn(true);
    setSignInFailed(false);
    history.push("/");
}

function handleFormData(e) {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    setFormData({
        ...formData,
        [targetName]: targetValue,
    });
}

function handleSubmit(e) {
    e.preventDefault();
    checkUser(formData);

    setFormData({
        username: "",
        password: "",
    });
}
//end

// SignUp
const [isClicked, setIsClicked] = useState(false);

function handleClick() {
    setIsClicked(isClicked => !isClicked);
    setSignInFailed(true);
}
// end

function fetchChildren(currentUser) {
    fetch(BASE_URL + `/users/${currentUser.id}`)
        .then(resp => resp.json())
        .then(children => {
            checkChildren(children);
            setIsLoaded(true);
        });
}

function checkChildren(children) {
    if (children) setChildren(children);
}

function fetchTask(selectChild) {
    fetch(BASE_URL + `/children/${selectChild.id}`)
        .then(resp => resp.json())
        .then(task => {
            checkTask(task);
            setIsLoaded(true);
            setCurrentPoints(task.points);
        });
}

function checkTask(task) {
    if (task) setTasks(task.tasks);
}

function handleDeleteTask(currentTask) {
    fetch(BASE_URL + `/tasks/${currentTask.id}`, {
        method: "DELETE",
    });
    const updatedTask = tasks.filter(task => task.id !== currentTask.id);
    setTasks(updatedTask);

    updatePoints(currentTask);
}

function updatePoints(currentTask) {
    const addPoints = currentPoints + currentTask.value;

    fetch(BASE_URL + `/children/${currentTask.child_id}/points`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ points: addPoints }),
    })
        .then(resp => resp.json())
        .then(newPoints => setCurrentPoints(newPoints.points));
}

if (!logIn) {
    return (
        <div className="App">
            <LogIn fetchChildren={fetchChildren} />
        </div>
    );
}

if (!isLoaded)
    return (
        <h2>
            <Loading />
        </h2>
    );

return (
    <div className="App">



        {/* end */}

        <Header />

        <Switch>
            <Route path="/LogIn">
                <LogIn
                    fetchChildren={fetchChildren}
                    rerender={rerender}
                    setRerender={setRerender}
                    handleSubmit={handleSubmit}
                    handleFormData={handleFormData}
                    signInFailed={signInFailed}
                />
            </Route>

            <Route path="/UserArea">
                <UserArea
                    setTasks={setTasks}
                    children={children}
                    setChildren={setChildren}
                    setCurrentPoints={setCurrentPoints}
                    rerender={rerender}
                    setRerender={setRerender}
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
                            <StatsArea currentPoints={currentPoints} />
                        </Col>
                    </Row>
                </div>
            </Route>

            <Route path="*">
                <h1>404 not found</h1>
            </Route>
        </Switch>
    </div>