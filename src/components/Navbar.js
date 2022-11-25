import React from "react";
import $ from "jquery";
import { FaUser } from "react-icons/fa";

$(function () {
  $(".ham").click(function () {
    $("aside").toggleClass("width");
    $("article").toggleClass("max-width");
    $(".nav").toggleClass("nav-width");
    $(".logo").toggleClass("opacity");
    $(".show-logo").toggleClass("d-block");
    $(".list-name").toggleClass("opacity");
    $(".uk-accordion-content").toggleClass("uk-hidden");
  });
  $(".mob-ham").click(function () {
    $("aside").toggleClass("width");
    // $("article").toggleClass("max-width");
    // $(".nav").toggleClass("nav-width");
    $(".logo").toggleClass("opacity");
    $(".show-logo").toggleClass("d-block");
    $(".list-name").toggleClass("opacity");
    $(".uk-accordion-content").toggleClass("uk-hidden");
  });
  $("#menu2").click(function () {
    $("#menu2").toggleClass("changebtn-2");
  });
});

const Navbar = () => {
  return (
    <nav>
      <div className="uk-flex uk-flex-between  nav ">
        <div className="uk-flex uk-flex-middle">
          <div className="ham uk-visible@m">
            <div className="menu2" id="menu2">
              <div>
                <span className="bar-1"></span>
                <span className="bar-2"></span>
                <span className="bar-3"></span>
              </div>
            </div>
          </div>
          <div className="mob-ham uk-hidden@m">
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
            <span className="uk-margin-small-left">Aniket</span>
            <i className="fas fa-chevron-down" style={{ fontSize: "12px" }}></i>
          </span>

          <span
            className="logOut"
            uk-dropdown="mode: click; animation: slide-right; animate-out: true; duration: 500"
          >
            <span uk-icon="icon:  sign-out"></span> Log Out
          </span>

          {/* <i className="fas fa-envelope"></i>  */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
