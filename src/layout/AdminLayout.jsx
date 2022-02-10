import React from "react";
import AdminFooter from "../components/common/Footer";
import AdmindNavbar from "../components/common/Navbar";
import AdminSidebar from "../components/common/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="wrapper">
      <AdminSidebar />
      <AdmindNavbar />
      <div className="">
        <div className="content">
          <div className="container-fluid">{children}</div>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;
