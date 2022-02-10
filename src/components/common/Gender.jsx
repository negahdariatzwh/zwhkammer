import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFemale,
  faMale,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
function Gender({ gender }) {
  return (
    <span>
      {gender === "m" || gender === "f" ? (

           gender ==='m' ? ( <FontAwesomeIcon style={{ color: "white" }} icon={faMale} />) : (<FontAwesomeIcon style={{ color: "white" }} icon={faFemale} />)
       
      ) : (
        <FontAwesomeIcon style={{ color: "white" }} icon={faQuestion} />
      )}
    </span>
  );
}

export default Gender;
