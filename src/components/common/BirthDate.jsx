import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
function BirthDate({ birthDate }) {
  return (
    <span>
      {birthDate ? (
        { birthDate }
      ) : (
        <FontAwesomeIcon style={{ color: "white" }} icon={faQuestion} />
      )}
    </span>
  );
}

export default BirthDate;
