import { React, useContext } from "react";
import SidebarHead from "../common/SidebarHead";
import MainContext from "../../context/MainContext";
import NavbarBtn from "../common/NavBtn";
function AdminSidebar({ children }) {
  const { pages, setcurrentPage_id } = useContext(MainContext);
  const sidebars = pages.filter((item) => item.sideBar.name !== "");
  console.log(setcurrentPage_id);

  return (
    <nav id="sidebar">
      <div className="sidebar-content">
        <SidebarHead />
        <div className="">
          <nav className="mt-2">
            <ul
              className=" nav-main nav-pills"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {sidebars
                ? sidebars.map((item) => (
                    <NavbarBtn
                      key={item._id}
                      id={item._id}
                      name={item.sideBar.name}
                      path={item.route}
                      xicon={item.icon}
                    />
                  ))
                : ""}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
export default AdminSidebar;
