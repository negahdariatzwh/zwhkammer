import { React, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "../common/Button";
import Card from "../common/Card";
import DynamicService from "../../service/DynamicService";
function EditUser({ user_id, hanleCloseBtn }) {
  const [formState, setFormState] = useState([]);

  const getUserInfo = () => {
    DynamicService.getId("zzls", "user", user_id)
      .then((response) => {
        setFormState(response.success);
        console.log(response.success);
      })
      .catch((err) => toast(err));
  };

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log("changed", e.target.value);
    console.log("state", formState);
  };

  const handleResetForm = () => {
    document.getElementById("add-new-user").reset();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("firstName", formState.firstName);
    formPayload.append("lastName", formState.lastName);
    formPayload.append("email", formState.email);
    formPayload.append("newpassword", formState.password);
    DynamicService.postId("zzls", "user", "adminupdate", user_id, formPayload)
      .then((response) => {
        toast.success("update");
      })
      .catch((error) => {
        toast.error(error);
      });
    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };
  useEffect(() => {
    getUserInfo();
  }, [user_id]);

  return (
    <Card
      title="Update User"
      topBtn="far fa-2x fa-window-close"
      topBtnClick={hanleCloseBtn}
    >
      <form
        onChange={handleFormChange}
        onSubmit={handleUpdate}
        id="add-new-user"
      >
        <div className="row">
          <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formState.email}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              minLength={5}
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
              value={formState.firstName}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formState.lastName}
            />
          </Form.Group>
        </div>

        <div className="row mb-4">
          <div className="col-md-2">
            <Button
              text="senden"
              icon="fa fa-plus"
              color="success"
              action={() => handleUpdate()}
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
    </Card>
  );
}
export default EditUser;
