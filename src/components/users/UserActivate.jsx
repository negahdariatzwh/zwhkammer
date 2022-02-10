import { React, useState } from "react";
import UserService from "../../service/UserService";
import { Form } from "react-bootstrap";

//import ToggleSwitch from "../common/ToggleSwitch";
function UserActivate({ id, status }) {
  const [userStatus, setuserStatus] = useState(status);

  const handleUpdate = () => (async) => {
    try {
      if (userStatus) {
        UserService.deactivate(id);
      } else {
        UserService.activate(id);
      }
      userStatus ? setuserStatus(false) : setuserStatus(true);
    } catch {
      setuserStatus(userStatus);
    }
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        key={id}
        checked={userStatus}
        onChange={handleUpdate()}
      ></Form.Check>
    </Form>
  );
}

export default UserActivate;
