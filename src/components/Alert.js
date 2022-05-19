import { useContext } from "react";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LogInContext, UserContext } from "../context/user";

function Alert({ setAlert }) {
    const [logIn, setLogIn] = useContext(LogInContext);
    const [user, setUser] = useContext(UserContext);
    console.log('user: ', user);
    const BASE_URL = "http://localhost:9292";
    const history = useHistory();

    function handleKeep() {
        setAlert(false);
    }

    function handleDelete() {


        fetch(BASE_URL + `/users/${user.id}`, {
            method: 'DELETE',
        })
        setLogIn(false);
        setUser([]);
          history.push("/LogIn");
    }

    return (
        <Container className="mt-5">
            <Card bg="info">
                <Card.Body>
                    <Card.Title className="fw-bolder fs-1">ALERT!</Card.Title>
                    <Card.Text className=" fw-bold">
                        Account will be DELETED.
                    </Card.Text>
                    <ButtonGroup>
                        <Button
                            onClick={handleKeep}
                            variant="success"
                            className="m-2"
                        >
                            Keep Account
                        </Button>
                        <Button 
                        onClick={handleDelete}
                        variant="danger" 
                        className="m-2">
                            Delete Account
                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Alert;
