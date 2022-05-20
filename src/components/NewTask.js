// function NewTask(){


//     return(
//         <div>
//         <InputGroup className="mb-3">
//             <DropdownButton
//                 variant="outline-secondary"
//                 title="Child"
//                 id="input-group-dropdown-1"
//                 onSelect={handleNewChildTask}
//             >
//                 {childList}
//             </DropdownButton>

//             <DropdownButton
//                 variant="outline-secondary"
//                 title="Task"
//                 id="input-group-dropdown-1"
//                 onSelect={handleTaskData}
//             >
//                 <Dropdown.Item eventKey={"Make Bed"}>
//                     Make Bed
//                 </Dropdown.Item>
//                 <Dropdown.Item eventKey={"Read Book"}>
//                     Read Book
//                 </Dropdown.Item>
//                 <Dropdown.Item eventKey={"Clean Room"}>
//                     Clean Room
//                 </Dropdown.Item>
//                 <Dropdown.Item eventKey={"Feed Pet"}>
//                     Feed Pet
//                 </Dropdown.Item>
//                 <Dropdown.Item eventKey={"Set Plates"}>
//                     Set Plates
//                 </Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton
//                 variant="outline-secondary"
//                 title="⭐ Value"
//                 id="input-group-dropdown-1"
//             >
//                 <Table striped bordered hover variant="dark">
//                     <tbody>
//                         <tr>
//                             <td>{starPoints}</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//                 <Form.Range
//                     min="0"
//                     max="20"
//                     value={starPoints}
//                     step="1"
//                     onChange={e =>
//                         setStarPoints(e.target.value)
//                     }
//                 />
//             </DropdownButton>
//         </InputGroup>
//         <Container className="position-relative">
//             <Card className="position-absolute top-50 start-50 ranslate-middle-x">
//                 <Card.Body className="p-0 ">
//                     {newChildTask ? (
//                         <h1>{currentChild}</h1>
//                     ) : null}
//                     <h1>⭐ {starPoints}</h1>
//                     <h1>{taskData}</h1>
//                 </Card.Body>

//                 <Button
//                     onClick={createNewTask}
//                     variant="primary"
//                     size="lg"
//                 >
//                     Create Task
//                 </Button>
//             </Card>
//         </Container>
//     </div>
//     )
// }
// export default NewTask