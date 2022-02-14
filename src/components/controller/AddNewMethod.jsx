import { React, useState, useContext } from "react";
import Button from "../common/Button";
//import ReactDOM from "react-dom";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import BlockThemed from "../common/BlockThemed";
import MainContext from "../../context/MainContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function AddNewMethod(props) {
  const { setaddForm } = useContext(MainContext);
  const [ckeditor, setckeditor] = useState();
  const [methodResult, setmethodResult] = useState();
  const [formState, setFormState] = useState({
    api_id: props.api_id,
    controller_id: props.controller_id,
    method_name: "",
    description: "",
  });

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const handleResetForm = () => {
    document.getElementById("create-method-form").reset();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("controller_id", props.id);
    formPayload.append("name", formState.method_name);
    formPayload.append("description", formState.description);
    formPayload.append("example", ckeditor);
    formPayload.append("result", methodResult);
    console.log(formState);
    DynamicService.add("kammer", "method", formPayload)
      .then((response) => {
        toast.success("added");
        props.setPageState(true);
        setaddForm(false);
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return (
    <BlockThemed
      color="bg-gd-emerald"
      icon="far fa-2x fa-window-close  closeBtn"
      close={() => setaddForm(false)}
      title="Neue Controller Hinzufügen"
    >
      <form
        id="create-method-form"
        onChange={handleFormChange}
        onSubmit={handleAdd}
      >
        <div className="row mb-4">
          <div className="col-md-6">
            <Input
              label="Method Name: myExampleMethod"
              floatingLabel={true}
              required={true}
              type="text"
              name="method_name"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <Textarea
              label="Method description"
              floatingLabel={true}
              name="description"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Method example</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setckeditor(data);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Method result</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setmethodResult(data);
                console.log(data);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-2">
            <Button
              text="hinzufügen"
              icon="fa fa-plus"
              color="success"
              type="submit"
            />
          </div>

          <div className="col-md-2">
            <Button
              text="reset"
              icon="fas fa-undo"
              color="warning"
              onClick={() => handleResetForm()}
            />
          </div>
        </div>
      </form>
    </BlockThemed>
  );
}

export default AddNewMethod;
