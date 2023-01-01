import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import LogOut from "./LogOut";
import UserContext from "../context/note context folder/noteContext";

const Navbar = ({ userDetails, handleMobHam }) => {
  const { logout } = useContext(AuthContext);
  let navigate = useNavigate();

  const logoutHandler = (e) => {
    localStorage.clear();
    sessionStorage.clear();
    logout();
    navigate("/");
  };

  const handleLogout = () => {
    $(".log-out-bg").fadeIn(300);
    $(".log-out").slideDown(500);
  };

  const handleMenu = () => {
    $("#menu2").toggleClass("changebtn-2");
  };

  const handleHam = () => {
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
      <nav>
        <div className="uk-flex uk-flex-between  nav ">
          <div className="uk-flex uk-flex-middle">
            <div className="ham uk-visible@m" onClick={handleHam}>
              <div className="menu2" id="menu2" onClick={handleMenu}>
                <div>
                  <span className="bar-1"></span>
                  <span className="bar-2"></span>
                  <span className="bar-3"></span>
                </div>
              </div>
            </div>
            <div className="mob-ham uk-hidden@m" onClick={handleMobHam}>
              <div className="menu2">
                <div>
                  <span className="bar-1"></span>
                  <span className="bar-2"></span>
                  <span className="bar-3"></span>
                </div>
              </div>
            </div>
            <span className="show-logo">Shree Sundevi</span>
          </div>

          <div className="uk-flex uk-flex-middle">
            {/* <i className="fas fa-search"></i>

                <i className="fas fa-bell"></i>  */}
            <span
              className="user uk-flex uk-flex-middle"
              style={{ color: "#fff" }}
            >
              <FaUser size="1rem" />
              <span className="uk-margin-small-left">
                {userDetails.name} - {userDetails.roleName}
              </span>
              <i
                className="fas fa-chevron-down"
                style={{ fontSize: "12px" }}
              ></i>
            </span>

            <span
              className="logOut"
              uk-dropdown="mode: click; animation: slide-right; animate-out: true; duration: 500"
              onClick={handleLogout}
            >
              <span uk-icon="icon:  sign-out"></span> Log Out
            </span>

            {/* <i className="fas fa-envelope"></i>  */}
          </div>
        </div>
      </nav>
      <LogOut logoutHandler={logoutHandler} />
    </>
  );
};

export default Navbar;
