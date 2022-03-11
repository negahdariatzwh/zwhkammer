import { React, useState } from "react";

function TableSearchIcon({
  item,
  searchHandle,
  sethItemToSearch,
  setItemToSearchValue,
}) {
  const [showSearch, setshowSearch] = useState(false);
  const [searchValue, setsearchValue] = useState();
  const handleClick = () => {
    showSearch ? setshowSearch(false) : setshowSearch(true);
  };
  const updateSearchValue = (value) => {
    setsearchValue(value);
    console.log("valllue", searchValue);
    sethItemToSearch(item);
    setItemToSearchValue(searchValue);
  };

  return (
    <span onDoubleClick={() => handleClick()}>
      {showSearch ? (
        <input
          className="form"
          type="text"
          focuse="on"
          value={searchValue}
          onChange={(e) => updateSearchValue(e.target.value)}
        />
      ) : (
        <i className="fas fa-search pointer blue leftspace"></i>
      )}
    </span>
  );
}

export default TableSearchIcon;
