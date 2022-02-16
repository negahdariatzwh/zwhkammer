import React from "react";

function Hnavi({ children }) {
  return (
    <div className="px-4 py-3 bg-body-extra-light rounded push">
      <ul className="nav nav-pills justify-content-center space-x-1">
        {children}
      </ul>
    </div>
  );
}

export default Hnavi;
