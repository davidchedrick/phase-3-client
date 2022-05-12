import { useContext, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import { useHistory } from "react-router-dom";
import hideCat from "../images/hideCat.png";

import { Route } from "react-router-dom";
import SignUp from "./SignUp";

function LogIn({ fetchChildren }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signInFailed, setSignInFailed] = useState(false);
  console.log('signInFailed: ', signInFailed);
  const [user, setUser] = useContext(UserContext);
  const [logIn, setLogIn] = useContext(LogInContext);
  const history = useHistory();
  const BASE_URL = "http://localhost:9292";

  function fetchUsers(userForm) {
    fetch(BASE_URL + `/users`)
      .then((resp) => resp.json())
      .then((users) => checkUser(users, userForm));
  }

  function checkUser(users, userForm) {
    const currentUser = users.filter(
      (userData) =>
        userData.username === userForm.username &&
        userData.password === userForm.password
    );
    currentUser[0] ? userIn(currentUser) : setSignInFailed(true)
  }

  function userIn(currentUser) {
    setUser(currentUser[0]);
    fetchChildren(currentUser[0]);
    setLogIn(true);
    setSignInFailed(false)
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
    fetchUsers(formData);
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <div className="LogIn">
      <div className="logo-title">BodhiCat's Chore List</div>

      <div className="p-5">
        <img
          alt="cutie cat"
          src={hideCat}
          className="Header d-inline-block align-top  "
        />

        <form className="p-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleFormData}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleFormData}
          />
          <input type="submit"></input>
          {signInFailed? 
          <h3 className="mt-3">Try Again or Sign Up</h3>
          :null}
        </form>
        <Route exact to="/SignUp">
          <SignUp 
            setSignInFailed={setSignInFailed}
            signInFailed={signInFailed}
          />
        </Route>
      </div>
    </div>
  );
}

export default LogIn;
