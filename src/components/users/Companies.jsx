import React from "react";

function Companies({ user_id }) {
  return (
    <div className="small-box bg-success">
      <div className="inner">
        <h3>Firmen</h3>
        <table className="table col-md-12 ">
          <thead>
            <th>status</th>
            <th>type</th>
            <th>Name</th>
            <th></th>
          </thead>
          <tr>
            <td>status:</td>
            <td>Type</td>
            <td>Name</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Companies;
