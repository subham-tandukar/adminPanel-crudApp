import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";

$(function () {
  $(".dropdown-list").click(function () {
    $("#dropdown-active").addClass("active");
  });
  $(".non-active").click(function () {
    $("#dropdown-active").removeClass("active");
  });
});

const Sidebar = () => {
  return (
    <>
      <div className="brand">
        <h3>
          <img src={logo} alt="" />
        </h3>
        <span className="logo">
          Shree Sundevi
          <span
            className="mob-close-icon uk-hidden@m mob-ham"
            uk-tooltip="Close"
          >
            <GrFormClose size="1.5rem" />
          </span>
        </span>
      </div>

      <ul className="uk-list uk-margin-remove-top uk-visible@m">
        <li>
          <NavLink to="/" className="list non-active">
            <i className="fas fa-user-tie"></i>
            <span className="list-name">User</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/form" className="list non-active">
            <i className="fab fa-wpforms"></i>
            <span className="list-name ">Form</span>
          </NavLink>
        </li>

        <li>
          <ul
            uk-accordion="true"
            className="uk-padding-remove uk-margin-remove"
          >
            <li style={{ borderBottom: "none" }}>
              <Link
                to="#"
                className="uk-accordion-title list"
                id="dropdown-active"
              >
                <i className="fas fa-filter"></i>
                <span className="list-name">Filter</span>
                <span className="list-name dropicon uk-margin-remove">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
              <div className="uk-accordion-content uk-margin-remove-top uk-hidden">
                <ul className="uk-nav uk-dropdown-nav">
                  <li style={{ borderBottom: "none", borderTop: "none" }}>
                    <Link to="/filter1" className="dropdown-list">
                      Filter1
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/filter2" className="dropdown-list">
                      Filter2
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/filter3" className="dropdown-list">
                      Filter3
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/sortable" className="list non-active">
            <i className="fas fa-sort" style={{ marginLeft: "1rem" }}></i>
            <span className="list-name">Sortable</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/slideshow" className="list non-active">
            <i className="fas fa-photo-video"></i>
            <span className="list-name">Slideshow</span>
          </NavLink>
        </li>
      </ul>

      {/* for mob version  */}
      <ul className="uk-list uk-margin-remove-top uk-hidden@m">
        <li>
          <NavLink to="/" className="list non-active mob-ham">
            <i className="fas fa-user-tie"></i>
            <span className="list-name">User</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/form" className="list non-active mob-ham">
            <i className="fab fa-wpforms"></i>
            <span className="list-name ">Form</span>
          </NavLink>
        </li>

        <li>
          <ul
            uk-accordion="true"
            className="uk-padding-remove uk-margin-remove"
          >
            <li style={{ borderBottom: "none" }}>
              <Link
                to="#"
                className="uk-accordion-title list"
                id="dropdown-active"
              >
                <i className="fas fa-filter"></i>
                <span className="list-name">Filter</span>
                <span className="list-name dropicon uk-margin-remove">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
              <div className="uk-accordion-content uk-margin-remove-top uk-hidden">
                <ul className="uk-nav uk-dropdown-nav">
                  <li style={{ borderBottom: "none", borderTop: "none" }}>
                    <Link to="/filter1" className="dropdown-list mob-ham">
                      Filter1
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/filter2" className="dropdown-list mob-ham">
                      Filter2
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/filter3" className="dropdown-list mob-ham">
                      Filter3
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/sortable" className="list non-active mob-ham">
            <i className="fas fa-sort" style={{ marginLeft: "1rem" }}></i>
            <span className="list-name">Sortable</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" className="list non-active mob-ham">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/slideshow" className="list non-active mob-ham">
            <i className="fas fa-photo-video"></i>
            <span className="list-name">Slideshow</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
