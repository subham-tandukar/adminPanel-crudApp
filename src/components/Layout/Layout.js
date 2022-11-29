import React, { useContext, useEffect } from "react";
import AssignUserContext from "../context/assign user context folder/assignUserContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const { userDetails, setUserDetails } = useContext(AssignUserContext);

  useEffect(() => {
    const cur_user = localStorage.getItem("token");

    cur_user.length && setUserDetails(JSON.parse(cur_user));
  }, []);
  return (
    <>
      <div className="layout-wrapper uk-flex">
        <aside>
          <Sidebar userDetails={userDetails} />
        </aside>

        <article>
          <Navbar userDetails={userDetails} />
          <div className="wrapper-bg">
            <div className="wrapper">{props.children}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Layout;
