import { Button, Container } from "react-bootstrap";

function ChildCard({
    child,
    fetchTask,
    deletingChild,
    setDeletingChild,
    rerender,
    setRerender,
}) {
    const BASE_URL = "http://localhost:9292";

    const handleDelete = () => {
        const childToDelete = child;

        fetch(BASE_URL + `/children/${childToDelete.id}`, {
            method: "DELETE",
        });

        setRerender(rerender => !rerender);
        setDeletingChild(false);
    };

    const handleCLick = () => {
        const selectChild = child;
        fetchTask(selectChild);
    };

    return (
        <Container className="d-flex justify-content-center p-2 w-25">
            <Button
                className="button-color btn-light"
                onClick={deletingChild ? e => handleDelete(e) : handleCLick}
            >
                {child.name}
            </Button>
        </Container>
    );
}

export default ChildCard;
