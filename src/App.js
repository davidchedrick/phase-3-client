import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import StatsArea from "./StatsArea";
import TaskArea from "./TaskArea";

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />

            <div>
                <Row>
                    <Col className="p-0" sm={8}>
                        <TaskArea />
                    </Col>

                    <Col className="p-0" sm={4}>
                        <StatsArea />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
