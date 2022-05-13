import { useContext, useEffect, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import { useHistory } from "react-router-dom";
import hideCat from "../images/hideCat.png";

import { Route } from "react-router-dom";
import SignUp from "./SignUp";
// import Nav from "./Nav";

function LogIn({ fetchChildren }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signInFailed, setSignInFailed] = useState(false);
  const [allUsers, setAllUsers] = useState("")
  const [user, setUser] = useContext(UserContext);
  const [logIn, setLogIn] = useContext(LogInContext);
  const history = useHistory();
  const BASE_URL = "http://localhost:9292";


  useEffect(() => {
    fetchUsers()
  }, [])

  function fetchUsers() {
    fetch(BASE_URL + `/users`)
      .then((resp) => resp.json())
      .then((users) => setAllUsers(users));
  }

  function checkUser(userForm) {
    const currentUser = allUsers.filter(
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
    checkUser(formData);
    
    setFormData({
      username: "",
      password: "",
    });
  }
  //
  // function handleDelete(e){
  //   console.log('id: ', e);
  //  console.log("cat545454455")
  //   // fetch(`http://localhost:9292/users/${id}`, {
  //   //   method: "DELETE",
  //   // });
  // }
  // const allcats = allUsers.map(user => <Nav key={user.id} user={user}/>)
  
  
  //
  return (
    <div className="LogIn">
      <div className="logo-title">BodhiCat's Chore List</div>

      <div className="p-5">
        <img
          alt="cutie cat"
          src={hideCat}
          className="Header d-inline-block align-top  "
        />

        <form className="p-3 mt-2" onSubmit={handleSubmit}>
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
            allUsers={allUsers}
          />
        </Route>
      </div>
        
            {/* {allcats} */}
    </div>
  );
}

export default LogIn;
