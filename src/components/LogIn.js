import { useContext, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import hideCat from "../images/hideCat.png";

function LogIn() {
  const [formData, setFormData] = useState("");
  const [user, setUser] = useContext(UserContext);
  const [logIn, setLogIn] = useContext(LogInContext);
  const history = useHistory();

  function handleChange(e) {
    let targetValue = e.target.value;
    setFormData(targetValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(formData);
    setLogIn(true);
    history.push("/");
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
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
