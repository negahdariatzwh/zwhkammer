import { React, Fragment } from "react";
import Block from "../common/Block";
function ProjectBlock({ project }) {
  let logo = "/assets/logo/" + project.logo;
  let goto = "/project/" + project._id;
  return (
    <Fragment>
      <Block
        title={project.name}
        //color="bg-success"
        content={project.show_name}
        //description="lkdsjklsjflkds"
        image={logo}
        //backImage={XImage}
        goTo={goto}
      />
    </Fragment>
  );
}
export default ProjectBlock;
