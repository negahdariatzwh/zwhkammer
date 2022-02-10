import React, { Fragment } from "react";
import AdminFooter from "../components/common/Footer";
import AdminNavbar from "../components/common/Navbar";
import AdminSidebar from "../components/common/Sidebar";
function NewLayout({ children }) {
  return (
    <Fragment>
      <div
        id="page-container"
        className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed side-trans-enabled"
      >
        <div id="page-overlay"></div>
        <aside id="side-overlay" data-simplebar="init"></aside>
        <AdminSidebar />

        <main id="main-container">
          <div className="content">{children}</div>
        </main>
        <AdminFooter />
      </div>
    </Fragment>
  );
}

export default NewLayout;
