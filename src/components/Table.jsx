import { ListGroup } from "react-bootstrap";

const Table = ({ selected, triggerState }) => {
  const checkSelected = value => (value === selected ? "selected" : "");

  return (
    <>
      <ListGroup>
        <ListGroup.Item onClick={() => triggerState("First")} className={checkSelected("First")}>
          First
        </ListGroup.Item>
        <ListGroup.Item onClick={() => triggerState("Second")} className={checkSelected("Second")}>
          Second
        </ListGroup.Item>
        <ListGroup.Item onClick={() => triggerState("Third")} className={checkSelected("Third")}>
          Third
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">{selected ? `Local state is ${selected}` : "No item selected yet"}</p>
    </>
  );
};

export default Table;
