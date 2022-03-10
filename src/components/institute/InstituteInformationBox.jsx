import { React, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import SmallBox from "../common/SmallBox";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
function InstituteInformationBox() {
  const [object, setObject] = useState([]);
  let params = useParams();
  let api = "https://kammer.hubgrade-dev.de/establishment/id/" + params.id;
  const getData = (params) => {
    DynamicService.dynamicGet(api)
      .then((response) => {
        setObject(response.success);
        //console.log(object);
      })
      .catch((er) => {
        toast.error(er);
      });
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <Fragment>
      {object ? (
        <SmallBox type="info" footer="ja" header={object.name}></SmallBox>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default InstituteInformationBox;
