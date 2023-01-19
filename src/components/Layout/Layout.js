import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import $ from "jquery";
import NavbarContext from "../context/navbar-context";

const Layout = (props) => {
  const { userDetails, setUserDetails } = useContext(NavbarContext);

  useEffect(() => {
    const cur_user = localStorage.getItem("token");

    cur_user.length && setUserDetails(JSON.parse(cur_user));
  }, []);

  const handleMobHam = () => {
    $("aside").toggleClass("width");
    $("article").toggleClass("max-width");
    $(".nav").toggleClass("nav-width");
    $(".logo").toggleClass("opacity");
    $(".show-logo").toggleClass("d-block");
    $(".list-name").toggleClass("opacity");
    $(".uk-accordion-content").toggleClass("uk-hidden");
  };
  return (
    <>
      <div className="layout-wrapper uk-flex">
        <aside>
          <Sidebar userDetails={userDetails} handleMobHam={handleMobHam} />
        </aside>

        <article>
          <Navbar userDetails={userDetails} handleMobHam={handleMobHam} />
          <div className="wrapper-bg">
            <div className="wrapper">{props.children}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Layout;
