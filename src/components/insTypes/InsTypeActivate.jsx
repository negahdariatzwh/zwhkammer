import { React, useState } from "react";
import InsTypeService from "../../service/InsTypesService";
import { Form } from "react-bootstrap";

function InsTypeActivate({ id, status }) {
  const [InsTypeStatus, setInsTypeStatus] = useState(status);

  const handleUpdate = () => (async) => {
    try {
      if (InsTypeStatus) {
        InsTypeService.deactivate(id);
      } else {
        InsTypeService.activate(id);
      }
      InsTypeStatus ? setInsTypeStatus(false) : setInsTypeStatus(true);
    } catch {
      setInsTypeStatus(InsTypeStatus);
    }
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        key={id}
        checked={InsTypeStatus}
        onChange={handleUpdate()}
      ></Form.Check>
    </Form>
  );
}

export default InsTypeActivate;
