import { React, useState } from "react";
import Service from "../../service/InstituteService";
import { Form } from "react-bootstrap";
function Activate({ id, status }) {
  const [ObjectStatus, setObjectStatus] = useState(status);
  const handleUpdate = () => (async) => {
    try {
      ObjectStatus ? Service.deactivate(id) : Service.activate(id);
      ObjectStatus ? setObjectStatus(false) : setObjectStatus(true);
    } catch {}
  };
  return (
    <Form>
      <Form.Check
        type="switch"
        key={id}
        checked={ObjectStatus}
        onChange={handleUpdate()}
      ></Form.Check>
    </Form>
  );
}
export default Activate;
