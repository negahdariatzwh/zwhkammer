import { React } from "react";
import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
//set page is function setter from caller
function ListTable({ headers, children, sortHandle }) {
  return (
    <div className="card">
      <Table responsive>
        <thead>
          <TableHeader headers={headers} sortHandle={sortHandle} />
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <TableHeader headers={headers} sortHandle={sortHandle} />
        </tfoot>
      </Table>
    </div>
  );
}
export default ListTable;
