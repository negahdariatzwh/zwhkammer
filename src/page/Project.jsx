import React from "react";
import PageInfo from "../components/common/PageInfo";
import { useParams } from "react-router";
import Summery from "../components/project/Summery";
import Establishments from "../components/project/Establishments";

function Project() {
  const params = useParams();
  const ProjectId = params.id;
  console.log(ProjectId);
  return (
    <div className="block block-rounded overflow-hidden">
      <PageInfo />
      <Summery />
      <Establishments id={ProjectId} />
    </div>
  );
}

export default Project;
