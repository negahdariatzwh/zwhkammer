import { React, useState } from "react";

function TableSearchIcon({ item, searchHandle }) {
  const [showSearch, setshowSearch] = useState(false);
  const [searchValue, setsearchValue] = useState();
  const handleClick = () => {
    showSearch ? setshowSearch(false) : setshowSearch(true);
  };

  const handleSearchValue = (e) => {
    setshowSearch(e.value);
    setsearchValue(e.value);
    console.log(searchValue);
  };

  return (
    <span onDoubleClick={() => handleClick()}>
      {showSearch ? (
        <input
          className="form"
          type="text"
          focuse="on"
          onChange={() => handleSearchValue()}
        />
      ) : (
        <i className="fas fa-search pointer blue leftspace"></i>
      )}
    </span>
  );
}

export default TableSearchIcon;
