import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NewUser from "./NewUser";

function SignUp({ signInFailed, setSignInFailed, allUsers, rerender, setRerender }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(isClicked => !isClicked);
        setSignInFailed(true);
    };

    return (
        <Container>
            <div>or</div>
            <Button
                className="button-color mt-3 mb-2 btn-light"
                onClick={handleClick}
            >
                Sign Up
            </Button>

            {isClicked && signInFailed === true ? (
                <NewUser
                    setSignInFailed={setSignInFailed}
                    allUsers={allUsers}
                    rerender={rerender}
                    setRerender={setRerender}
                />
            ) : null}
        </Container>
    );
}

export default SignUp;
