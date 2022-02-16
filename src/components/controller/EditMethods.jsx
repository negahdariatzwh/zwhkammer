import { React, useEffect, useState, useContext, Fragment } from "react";
import Button from "../common/Button";
import BlockThemed from "../common/BlockThemed";
import Input from "muicss/lib/react/input";
import Form from "muicss/lib/react/form";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import MainContext from "../../context/MainContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function EditMethods(props) {
  const { editForm, seteditForm, setRefreshList } = useContext(MainContext);
  const [ckeditor, setckeditor] = useState();
  const [methodResult, setmethodResult] = useState();

  const [formState, setFormState] = useState([]);
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  useEffect(() => {
    if (editForm) {
      getData();
    }
  }, [editForm]);
  const getData = () => {
    if (editForm) {
      //console.log("set edir form in udpatecont line 17", editForm);
      DynamicService.getId("kammer", "method", editForm)
        .then((response) => {
          //console.log("it is response for object to edit", response.success);
          setFormState(response.success);
          setckeditor(response.success.example);
          setmethodResult(response.success.result);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("update begin", formState);
    const formPayload = new FormData();
    formPayload.append("name", formState.name);
    formPayload.append("description", formState.description);
    formPayload.append("result", methodResult);
    formPayload.append("example", ckeditor);

    //console.log(formState);
    DynamicService.update("kammer", "method", editForm, formPayload)
      .then((response) => {
        seteditForm();
        toast.success("updated");
        setRefreshList(Math.random());
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
              title="Controller Aktualisieren"
              close={() => seteditForm(false)}
            >
              <Form onChange={handleFormChange} onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <Input
                      label="Method Name: myExampleMethod"
                      floatingLabel={false}
                      required={true}
                      type="text"
                      name="name"
                      defaultValue={formState.name}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-12">
                    <Textarea
                      label="Method description"
                      floatingLabel={false}
                      name="description"
                      defaultValue={formState.description}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-12">
                    {ckeditor ? (
                      <CKEditor
                        editor={ClassicEditor}
                        data={ckeditor}
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
                    ) : (
                      <CKEditor
                        editor={ClassicEditor}
                        data=""
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
                    )}
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-12">
                    {methodResult ? (
                      <CKEditor
                        editor={ClassicEditor}
                        data={methodResult}
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
                    ) : (
                      <CKEditor
                        editor={ClassicEditor}
                        data=""
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
                    )}
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

export default EditMethods;
