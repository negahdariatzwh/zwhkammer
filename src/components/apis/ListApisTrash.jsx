import { React, useState, useEffect, Fragment } from "react";
import RibonIconStarBtn from "../widgets/cards/RibonIconStarBtn";
import DynamicService from "../../service/DynamicService";
import { useHistory } from "react-router";
function ListApisTrash(props) {
  const [objects, setObjects] = useState([]);
  const getData = () => {
    DynamicService.trash("kammer", "api").then((response) => {
      setObjects(response.success);
    });
  };
  useEffect(() => {
    getData();
  }, [props.pageState]);
  const history = useHistory();
  const handleClick = (id) => {
    let goTo = "/api/" + id;
    history.push(goTo);
  };
  return (
    <Fragment>
      <h3>Trash</h3>
      <hr />
      {objects.found
        ? objects.found.map((item) => (
            <div className="col-md-3" key={item._id}>
              <RibonIconStarBtn
                ribon={item.isActive ? "Aktive" : ""}
                top={item.name}
                down={item.address}
                icon={item.icon}
                iconColor={item.color}
                countStar=""
                btnIcon="far fa-play-circle"
                btnText="öffnen"
                action={() => handleClick(item._id)}
                secondBtnIcon="fas fa-edit"
                secondBtnText="bearbeiten"
                secondBtnAction={() => {
                  props.setEditForm(item._id);
                }}
              />
            </div>
          ))
        : "nothing found"}
    </Fragment>
  );
}

export default ListApisTrash;
