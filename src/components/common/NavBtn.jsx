import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import MainContext from "../../context/MainContext";

function NavBtn({ name, path, xicon, id }) {
  const { setcurrentPage_id } = useContext(MainContext);
  // const handleClick = (id) => {
  //  console.log("click handeled in NavBtn.jsx", id);
  // };

  return (
    <li
      key={id}
      className="mysidebarbtn"
      style={{ cursor: "pointer" }}
      onClick={() => setcurrentPage_id(id)}
    >
      <NavLink className="nav-link " to={path} exact>
        <span className="maginright5px">
          <i className={xicon}></i>
        </span>

        <span className="nav-main-link-name">{name}</span>
      </NavLink>
    </li>
  );
}

export default NavBtn;
