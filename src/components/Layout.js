import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="layout-wrapper uk-flex">
        <aside>
          <Sidebar />
        </aside>

        <article>
          <Navbar />
          <div className="wrapper-bg">
            <div className="wrapper">{props.children}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Layout;
