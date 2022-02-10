import { React, useEffect, useState, useContext, Fragment } from "react";
import Button from "../common/Button";
//import ReactDOM from "react-dom";
import BlockThemed from "../common/BlockThemed";
import Input from "muicss/lib/react/input";
import Form from "muicss/lib/react/form";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import { PageApiContenxt } from "../../context/PageApiContext";
function UpdateController(props) {
  const { editForm, seteditForm, refreshList } = useContext(PageApiContenxt);
  const [formState, setFormState] = useState([]);

  useEffect(() => {
    if (editForm) {
      getData();
    }
  }, [editForm]);
  const getData = () => {
    if (seteditForm) {
      //console.log("set edir form in udpatecont line 17", editForm);
      DynamicService.getId("kammer", "api_controller", editForm)
        .then((response) => {
          //console.log("it is response for object to edit", response.success);
          setFormState(response.success);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  //console.log(formState);
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("update begin", formState);
    const formPayload = new FormData();
    formPayload.append("name", formState.name);
    formPayload.append("description", formState.description);
    //console.log(formState);
    DynamicService.update(
      "kammer",
      "api_controller",
      props.editForm,
      formPayload
    )
      .then((response) => {
        seteditForm();
        toast.success("updated");
        refreshList(Math.random());
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Fragment>
      {editForm ? (
        <div className="row">
          <div className="col-md-12 fadeIn">
            <BlockThemed
              color="bg-gd-default"
              icon="far fa-2x fa-window-close  closeBtn"
              onClick={() => seteditForm(false)}
              title="Controller Aktualisieren"
            >
              <Form onChange={handleFormChange} onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <Input
                      label="Controller Name: myExampleApi2"
                      name="name"
                      defaultValue={formState.name}
                    />
                  </div>

                  <div className="col-md-12">
                    <Textarea
                      label="Controller Beschreibung"
                      floatingLabel={false}
                      name="description"
                      value={formState.description}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-2">
                    <Button
                      icon="fas fa-edit"
                      color="primary"
                      name="aktualisierung"
                      value="submit"
                      type="submit"
                      text="aktualisierung"
                    />
                  </div>
                </div>
              </Form>
            </BlockThemed>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default UpdateController;
