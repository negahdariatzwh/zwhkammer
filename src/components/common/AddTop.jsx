import { React, Fragment, useState } from "react";

function AddTop({ children }) {
  const [showChildren, setshowChildren] = useState(false);
  // const HanleShow = () => {
  //   showChildren ? setshowChildren(false) : setshowChildren(true);
  // };
  //console.log(setshowChildren);
  return (
    <Fragment>
      <div className="row row_add_new_item_hidden" id="row_add_new_item_hidden">
        <div className="col-12">{showChildren ? children : ""}</div>
      </div>
    </Fragment>
  );
}

export default AddTop;
