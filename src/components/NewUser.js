import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LogInContext, UserContext } from "../context/user";

function NewUser() {
    //start
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
        currentUser[0] ? userIn(currentUser) : console.log("cat656565")
    }
      
    function userIn(currentUser) {
        setUser(currentUser[0].username);
        setLogIn(true);
        //history.push("/");
    }

    function handleFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;
        console.log('e: ', e.target.value);
        setFormData({
          ...formData,
          [targetName]: targetValue,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        fetchUsers(formData);
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