import { useHistory } from 'react-router-dom';

import { Button } from "react-bootstrap";
import { useContext } from 'react';
import { UserContext, LogInContext } from '../context/user';

function UserArea({ setTasks, setChildren }) {

  const [user, setUser] = useContext(UserContext);
  const [logIn, setLogIn] = useContext(LogInContext);

  const history = useHistory();

  function handleLogOut() {
    setLogIn(false);
    setUser([]);
    setChildren([])
    setTasks([])
    history.push('/LogIn');
}

    return (
      <div>
        <div>
        {logIn ? `Welcome, ${user.username} ` : ""}
        </div>
      <div className="UserArea">
          <div><Button onClick={handleLogOut} >Log Out</Button></div>
          
      </div>
      </div>
    );
  }
  
  export default UserArea;