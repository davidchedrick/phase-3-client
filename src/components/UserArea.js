import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useContext } from "react";
import { UserContext, LogInContext } from "../context/user";


function UserArea({ setTasks, setChildren, setCurrentPoints }) {
    const [user, setUser] = useContext(UserContext);
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

    return (
        <div>
            <div>{logIn ? `Welcome, ${user.username} ` : ""}</div>

            <div className="UserArea p-3">
                <div className="d-flex justify-content-between">
                <ButtonGroup>
                    <Button>Add Child</Button>
                    <Button>Add Tasks</Button>
                 
        
                    
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={handleLogOut}>Log Out</Button>

                </ButtonGroup>

                
                
                </div>
            </div>
        </div>
    );
}

export default UserArea;
