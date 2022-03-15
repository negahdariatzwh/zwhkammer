import { React, useState, Fragment, useEffect } from "react";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
function SelectInstitute({ setSelectedKammerId }) {
  const [listTypes, setlistTypes] = useState([]);
  const [listKammer, setlistKammer] = useState([]);
  const [typeId, setTypeId] = useState();
  const [Kammer_id, setKammerId] = useState();

  const loadKammerTyps = () => {
    DynamicService.list("kammer", "Estabtype")
      .then((response) => {
        setlistTypes(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  };

  const handleChangeKammerType = (e) => {
    setTypeId(e.target.value);
  };

  const handleChangeKammer = (e) => {
    setKammerId(e.target.value);
    console.log("selected Kammet_id", Kammer_id);
    setSelectedKammerId(e.target.value);
  };

  const getKammer = (type_id, searchOption, searchValue) => {
    DynamicService.listIdAll(
      "kammer",
      "estabtype",
      "establishments",
      type_id,
      "",
      "",
      searchOption,
      searchValue
    )
      .then((response) => {
        //console.log("list found kammer", response.success.found);
        let foundData = response.success.found;
        console.log("found kammer ", foundData);
        setlistKammer(foundData);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    loadKammerTyps();
    getKammer(typeId);
  }, [typeId]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <select
            label="Kammer Type"
            name="KammerType"
            className="form-select"
            onChange={(e) => handleChangeKammerType(e)}
          >
            {listTypes.found
              ? listTypes.found.map((kammeType) => (
                  <option key={kammeType._id} value={kammeType._id}>
                    {kammeType.name}
                  </option>
                ))
              : ""}
          </select>
        </div>
        <div className="col-md-6">
          <div>
            <select
              label="Kammer"
              name="Kammer"
              className="form-select"
              onChange={(e) => handleChangeKammer(e)}
            >
              {listKammer
                ? listKammer.map((kammer) => (
                    <option key={kammer._id} value={kammer._id}>
                      {kammer.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SelectInstitute;
