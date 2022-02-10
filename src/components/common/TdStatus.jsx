import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
function TdStatus( active ) {
  return (
    <span>
      {active ? (
        <FontAwesomeIcon style={{ color: "green" }} icon={faCheckSquare} />
      ) : (
        <FontAwesomeIcon style={{ color: "red" }} icon={faTimesCircle} />
      )}
    </span>
  );
}

export default TdStatus;
