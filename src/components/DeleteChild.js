import { Container } from "react-bootstrap";
import ChildCard from "./ChildCard";

function DeleteChild({
    userChildren,
    rerender,
    setRerender,
    deletingChild,
    setDeletingChild,
    setChildren,
}) {
    const currentChildren = userChildren.children;

    const childrenList = currentChildren?.map(child => (
        <ChildCard
            key={child.id}
            child={child}
            deletingChild={deletingChild}
            setDeletingChild={setDeletingChild}
            setChildren={setChildren}
            userChildren={userChildren}
            rerender={rerender}
            setRerender={setRerender}
        />
    ));

    return (
        <Container>
            <div className="row m-2">{childrenList}</div>
        </Container>
    );
}

export default DeleteChild;
