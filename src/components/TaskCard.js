import bed from "../images/bed.webp";
import book from "../images/book.webp";
import clean from "../images/clean.webp";
import pet from "../images/pet.webp";
import plate from "../images/plate.webp";

import { Card, Button } from "react-bootstrap";

function TaskCard({ task }) {
  const { body, value } = task;

  function img(body) {
    switch (body) {
      case "Make Bed":
        return bed;
      case "Read Book":
        return book;
      case "Clean Room":
        return clean;
      case "Feed Pet":
        return pet;
      case "Set Plates":
        return plate;
    }
  }

  return (
    <Card className="w-25 m-3 ">
      <Card.Body className="p-0 ">
        <Card.Img
          src={img(body)}
          className="img-fluid rounded-start pic"
          alt="..."
        ></Card.Img>

        <Card.Title>{body}</Card.Title>
        <Card.Text>{value} ⭐</Card.Text>
      </Card.Body>

      <Button variant="danger" size="lg">
        DONE
      </Button>
    </Card>
  );
}

export default TaskCard;