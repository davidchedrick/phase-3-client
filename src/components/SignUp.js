
import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import NewUser from "./NewUser"

function SignUp({ signInFailed, setSignInFailed }) {

    const [isClicked, setIsClicked] = useState(false)
    
    function handleClick() {
        setIsClicked(isClicked => !isClicked)
        setSignInFailed(true)
    }
    return(
        <Container>
            <div>
              or  
            </div>
        <Button 
            className="button-color mt-3 btn-light"
            onClick={handleClick}
        >
            Sign Up
        </Button>

        {isClicked && signInFailed === true?  
        <NewUser 
            setSignInFailed={setSignInFailed}
        />: null}
        </Container>
    )
}

export default SignUp