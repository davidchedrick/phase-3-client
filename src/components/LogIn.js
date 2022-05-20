import { useContext, useState } from "react";
import { UserContext, LogInContext } from "../context/user";
import { useHistory } from "react-router-dom";
import hideCat from "../images/hideCat.png";

import { Route } from "react-router-dom";
import SignUp from "./SignUp";

function LogIn({
    fetchChildren,
    rerender,
    allUsers,
    setRerender,
    // handleFormData,
    // handleSubmit,
}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [signInFailed, setSignInFailed] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [logIn, setLogIn] = useContext(LogInContext);
    const history = useHistory();

    function checkUser(userForm) {
        console.log("userForm: ", userForm);
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

    return (
        <>
            {/* LogIn */}
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
                        {signInFailed ? (
                            <h3 className="mt-3">Try Again or Sign Up</h3>
                        ) : null}
                    </form>
                    <Route exact to="/SignUp">
                        <SignUp
                            setSignInFailed={setSignInFailed}
                            signInFailed={signInFailed}
                            allUsers={allUsers}
                            rerender={rerender}
                            setRerender={setRerender}
                        />
                    </Route>
                </div>
            </div>
            {/* end */}
        </>
    );
}

export default LogIn;
