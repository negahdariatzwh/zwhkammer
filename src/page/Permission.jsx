import React, { Fragment } from "react";
import PageInfo from "../components/common/PageInfo";
import { useParams } from "react-router";

function Permission() {
  const params = useParams();
  const ProjectId = params.id;
  console.log(ProjectId);
  return (
    <Fragment>
      <PageInfo />
    </Fragment>
  );
}

export default Permission;
