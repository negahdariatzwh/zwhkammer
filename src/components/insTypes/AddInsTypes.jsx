import { React, Fragment, useState, useEffect } from "react";
import AddTop from "../common/AddTop";
import Card from "../common/Card";
import { Button, Form } from "react-bootstrap";
import InsTypeService from "../../service/InsTypesService";
import { toast } from "react-toastify";
import ListInsTypes from "./ListInsTypes";
import "./insTypes.scss";

//###############################################################

function AddInsTypes() {
  const [insTypes, setInsTypes] = useState({
    name: "",
    description: "",
    isActive: 1,
  });
  //##############################################################
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setInsTypes((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  //##############################################################
  // const handleChangeCheckbox= (e) =>{
  //   const newIsActive=e.target.checked
  //   setInsTypes((prevState)=>({
  //     ...prevState,
  //     isActive:newIsActive
  //   }))
  // }

  //##############################################################
  const updateData = () => {
    <ListInsTypes />;
  };

  useEffect(() => {}, []);

  //##############################################################
  const handleAdd = async () => {
    const insTypesPayload = new FormData();
    insTypesPayload.append("name", insTypes.name);
    insTypesPayload.append("description", insTypes.description);
    insTypesPayload.append("isActive", insTypes.isActive);

    InsTypeService.addInsTypes(insTypesPayload)
      .then((response) => {
        toast.success("added");
        updateData();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // let data=await InsTypeService.addInsTypes(insTypesPayload)

  //##############################################################
  return (
    <Fragment>
      <AddTop>
        <Card title="Add new Institiute Type">
          <Form>
            <div className="row">
              <Form.Group className="mb-3 col-md-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  value={insTypes.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-md-4"
                controlId="formBasicPassword"
              />

              <Form.Group className="mb-3 col-md-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description"
                  id="description"
                  value={insTypes.description}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* <Form.Group  className="mb-3 col-md-4 checkBox_container">
                <Form.Label>Active</Form.Label>
                <FormControlLabel control={<Checkbox checked={insTypes.isActive}
                                                     onChange={handleChangeCheckbox}
                                                     className="checkBox_item" 
                                                       />}/>
                  
              </Form.Group> */}
            </div>

            <Button variant="primary" onClick={handleAdd}>
              Submit
            </Button>
          </Form>
        </Card>
      </AddTop>
    </Fragment>
  );
}

export default AddInsTypes;
