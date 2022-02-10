import { React, useState } from "react";
import DynamicFormAddObject from "../common/DynamicFormAddObject";

function AddUserTest() {
  const [formState, setFormState] = useState([]);
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>HHHIIIIIIII</h1>
      <DynamicFormAddObject
        apiName="kammer"
        apiController="user"
        formInputs={formState}
      >
        <form action="">
          <input name="uuuu" value="ddd" />
        </form>

        <h2>ddd</h2>
      </DynamicFormAddObject>
    </div>
  );
}

export default AddUserTest;
