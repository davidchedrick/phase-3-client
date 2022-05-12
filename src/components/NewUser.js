import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { LogInContext, UserContext } from "../context/user";

function NewUser({ setSignInFailed }) {
    //start
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    // const [user, setUser] = useContext(UserContext);
    // const [logIn, setLogIn] = useContext(LogInContext);

    const history = useHistory();
    const BASE_URL = "http://localhost:9292";


    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    };
    
    function postUser() {
        fetch(BASE_URL + `/users`, configObj)
        .then((resp) => resp.json())
        .then((user) => {
              console.log(user)
          })
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
        postUser();
        setSignInFailed(false);
    }
    


    return(
        <div>
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
        </div>
    )
}

export default NewUser