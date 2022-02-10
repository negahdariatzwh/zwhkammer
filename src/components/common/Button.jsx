import React from "react";

function Button(props) {
  let btnStyle = " btn btn-" + props.color;
  return (
    <button
      type={props.type}
      className={`${btnStyle}`}
      name={props.name}
      onClick={props.onClick}
    >
      <i className={`${props.icon}`}></i>
      <span style={{ paddingLeft: "5px" }}> {props.text} </span>
    </button>
  );
}

export default Button;
//{ text, icon, color, onClick }
