
import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import NewUser from "./NewUser"

function SignUp() {

    const [isClicked, setIsClicked] = useState(false)
    

    return(
        <Container>
            <div>
              or  
            </div>
        <Button 
            className="button-color mt-3 btn-light"
            onClick={() => setIsClicked(isClicked => !isClicked)}
        >
            Sign Up
        </Button>

        {isClicked ?  <NewUser />: null}
        </Container>
    )
}

export default SignUp