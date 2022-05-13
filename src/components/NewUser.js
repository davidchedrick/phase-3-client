import { Button } from "react-bootstrap"
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewUser({ setSignInFailed, allUsers }) {
    console.log("allUsers: ", allUsers);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [pendingUser, setPendingUser] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [signUpFailed, setSignUpFailed] = useState(false);
    const history = useHistory();
    const BASE_URL = "http://localhost:9292";

    function postUser(newUser) {

        fetch(BASE_URL + `/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then(resp => resp.json())
            .then(user => {
                console.log(user);
            });
    }

    function handleFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setFormData({
            ...formData,
            [targetName]: targetValue,
        });

       
    }

    

    function checkUser() {
        const check = allUsers.filter(
            names => names.username !== pendingUser.username
        );
        console.log("check: ", check);
        console.log("check: ", check.length);
        console.log("pendingUser^^^^^^^: ", pendingUser);
        if (check.length === allUsers.length) {
            console.log("pendingUser++++++", pendingUser);
            approveUser(pendingUser);
            setSignUpFailed(false)
        } else {
            console.log("used name");
            setSignUpFailed(true)
            setIsDisabled(true)
        }

        
    }


    function approveUser(newUser) {
        postUser(newUser);
        setSignInFailed(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPendingUser(formData);
    
        setIsDisabled(false)
        setFormData({
            username: "",
            password: "",
        });
    }

    return (
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
                <input  type="submit"></input>
            </form>
            {signUpFailed ? (
                <h3 className="mt-3">Try Again, User Already Exist</h3>
            ) : null}
            <Button disabled={isDisabled} onClick={checkUser} className="mt-2">Check Availiability</Button>
        </div>
    );
}

export default NewUser;
