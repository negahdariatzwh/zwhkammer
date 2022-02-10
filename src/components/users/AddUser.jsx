import { React, useState } from "react";
import { Form } from "react-bootstrap";
import UserService from "../../service/UserService";
import { toast } from "react-toastify";
import Button from "../common/Button";

function AddUser() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  });

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetForm = () => {
    document.getElementById("add-new-user").reset();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("firstName", formState.firstName);
    formPayload.append("lastName", formState.lastName);
    formPayload.append("email", formState.email);
    formPayload.append("password", formState.password);
    formPayload.append("birthDate", formState.birthDate);

    UserService.addUser(formPayload)
      .then((response) => {
        toast.success("added");
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };
  return (
    <form onChange={handleFormChange} onSubmit={handleAdd} id="add-new-user">
      <div className="row">
        <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={setFormState.email}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={setFormState.password}
            required
          />
        </Form.Group>
      </div>

      <div className="row">
        <Form.Group className="mb-3 col-md-4" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            value={setFormState.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-4" controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={setFormState.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-4" controlId="">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder=""
            name="birthDate"
            value={setFormState.birthDate}
          />
        </Form.Group>
      </div>

      <div className="row mb-4">
        <div className="col-md-2">
          <Button
            text="senden"
            icon="fa fa-plus"
            color="success"
            action={() => handleAdd()}
          />
        </div>

        <div className="col-md-2">
          <Button
            text="reset"
            icon="fas fa-undo"
            color="warning"
            action={() => handleResetForm()}
          />
        </div>
      </div>
      <div className="row mb-4"></div>
    </form>
  );
}

export default AddUser;
