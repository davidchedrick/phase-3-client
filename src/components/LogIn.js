import { useContext, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import { useHistory } from "react-router-dom";
import hideCat from "../images/hideCat.png";

import { Route } from "react-router-dom";
import SignUp from "./SignUp";

function LogIn() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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
    currentUser[0] ? userIn(currentUser) : signUp()
  } 

  function userIn(currentUser) {
    setUser(currentUser[0]);
    setLogIn(true);
    history.push("/");
  }

  function signUp() {
    console.log("cat")
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
  }

  return (
    <div className="LogIn">
      <div className="logo-title">BodhiCat's Chore List</div>

      <div className="p-5">
        <img
          alt=""
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
        </form>
        <Route exact  to="/SignUp">
          <SignUp/>
        </Route>
      </div>
    </div>
  );
}

export default LogIn;
