import { React } from "react";
import { Breadcrumb } from "react-bootstrap";
import { getPageParents } from "../../app/Utils";
function PathNavi({ page }) {
  let parents = getPageParents(page._id);
  return (
    <Breadcrumb>
      {parents.map((item) => (
        <Breadcrumb.Item key={item._id} href={item.route}>
          {item.title}
        </Breadcrumb.Item>
      ))}
      <Breadcrumb.Item key={page._id} active>
        {page.title}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default PathNavi;
