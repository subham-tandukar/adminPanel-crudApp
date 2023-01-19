import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import RoleContext from "../context/role context folder/roleContext";
import PermissionContext from "../context/permission context folder/permissionContext";
import UsewindowDimension from "../hooks/UsewindowDimension";
import NavbarContext from "../context/navbar-context";
import { Fetchdata } from "../hooks/getData";

const Sidebar = ({ userDetails, handleMobHam }) => {
  const { roleData } = useContext(RoleContext);
  const { baseURL } = useContext(NavbarContext);

  const {
    role,
    setRole,
    permission,
    setPermission,
    user,
    setUser,
    form,
    setForm,
    filter,
    setFilter,
    sortable,
    setSortable,
    slideshow,
    setSlideshow,
  } = useContext(PermissionContext);

  console.log("role", role);
  console.log("permission", permission);
  console.log("User", user);
  console.log("form", form);
  console.log("filter", filter);
  console.log("sortable", sortable);
  console.log("slideshow", slideshow);

  const roleName = userDetails.roleName;

  const ROLE = roleData.filter((obj) => {
    return obj.roleName === roleName;
  });

  console.log("role", ROLE);

  const id = $("#id").val();

  // set permission-----------------------------------

  const PermData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getRole/${id}`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.RoleList[0] ? result.RoleList[0] : "";
        setRole(postResult.role[0]);
        setPermission(postResult.permission[0]);
        setUser(postResult.user[0]);
        setForm(postResult.form[0]);
        setFilter(postResult.filter[0]);
        setSortable(postResult.sortable[0]);
        setSlideshow(postResult.slideshow[0]);
      } else {
        console.log(result.Message);
      }
    });
  };

  useEffect(() => {
    PermData();
  }, [id]);

  const handleDropdown = () => {
    $("#dropdown-active").addClass("active");
  };

  const { width } = UsewindowDimension();
  const handleActive = () => {
    $("#dropdown-active").removeClass("active");
    if (width < 960) {
      handleMobHam();
    }
  };

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
            onClick={handleMobHam}
          >
            <GrFormClose size="1.5rem" />
          </span>
        </span>
      </div>

      <ul className="uk-list uk-margin-remove-top uk-visible@m">
        <li>
          <NavLink to="/" className="list non-active" onClick={handleActive}>
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Dashboard</span>
          </NavLink>
        </li>

        {role.read ? (
          <li>
            <NavLink
              to="/role"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-user-tag"></i>
              <span className="list-name">Role</span>
            </NavLink>
          </li>
        ) : null}

        {permission.read ? (
          <li>
            <NavLink
              to="/permission"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-check-circle"></i>
              <span className="list-name">Permission</span>
            </NavLink>
          </li>
        ) : null}

        {user.read ? (
          <li>
            <NavLink
              to="/user"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-user-tie"></i>
              <span className="list-name"> User</span>
            </NavLink>
          </li>
        ) : null}

        {form.read ? (
          <li>
            <NavLink
              to="/form"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fab fa-wpforms"></i>
              <span className="list-name ">Form</span>
            </NavLink>
          </li>
        ) : null}

        {filter.read ? (
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
                <div className="uk-accordion-content uk-margin-remove-top">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li style={{ borderBottom: "none", borderTop: "none" }}>
                      <Link
                        to="/filter1"
                        className="dropdown-list"
                        onClick={handleDropdown}
                      >
                        Filter1
                      </Link>
                    </li>
                    <li style={{ borderBottom: "none" }}>
                      <Link
                        to="/filter2"
                        className="dropdown-list"
                        onClick={handleDropdown}
                      >
                        Filter2
                      </Link>
                    </li>
                    <li style={{ borderBottom: "none" }}>
                      <Link
                        to="/filter3"
                        className="dropdown-list"
                        onClick={handleDropdown}
                      >
                        Filter3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        ) : null}

        {sortable.read ? (
          <li>
            <NavLink
              to="/sortable"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-sort" style={{ marginLeft: "1rem" }}></i>
              <span className="list-name">Sortable</span>
            </NavLink>
          </li>
        ) : null}

        {slideshow.read ? (
          <li>
            <NavLink
              to="/slideshow"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-photo-video"></i>
              <span className="list-name">Slideshow</span>
            </NavLink>
          </li>
        ) : null}

        <li>
          <NavLink
            to="/note"
            className="list non-active"
            onClick={handleActive}
          >
            <i className="fab fa-wpforms"></i>
            <span className="list-name">Note</span>
          </NavLink>
        </li>
      </ul>

      {/* for mob version  */}
      <ul className="uk-list uk-margin-remove-top uk-hidden@m">
        <li>
          <NavLink
            to="/"
            className="list non-active mob-ham"
            onClick={handleActive}
          >
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Dashboard</span>
          </NavLink>
        </li>

        {role.read ? (
          <li>
            <NavLink
              to="/role"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-user-tag"></i>
              <span className="list-name">Role</span>
            </NavLink>
          </li>
        ) : null}

        {permission.read ? (
          <li>
            <NavLink
              to="/permission"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-check-circle"></i>
              <span className="list-name">Permission</span>
            </NavLink>
          </li>
        ) : null}

        {user.read ? (
          <li>
            <NavLink
              to="/user"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-user-tie"></i>
              <span className="list-name"> User</span>
            </NavLink>
          </li>
        ) : null}

        {/* <li>
          <NavLink to="/user" className="list non-active mob-ham">
            <i className="fas fa-user-tie"></i>
            <span className="list-name">User</span>
          </NavLink>
        </li> */}

        {form.read ? (
          <li>
            <NavLink
              to="/form"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fab fa-wpforms"></i>
              <span className="list-name ">Form</span>
            </NavLink>
          </li>
        ) : null}

        {filter.read ? (
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
                      <Link
                        to="/filter1"
                        className="dropdown-list mob-ham"
                        onClick={handleDropdown}
                      >
                        Filter1
                      </Link>
                    </li>
                    <li style={{ borderBottom: "none" }}>
                      <Link
                        to="/filter2"
                        className="dropdown-list mob-ham"
                        onClick={handleDropdown}
                      >
                        Filter2
                      </Link>
                    </li>
                    <li style={{ borderBottom: "none" }}>
                      <Link
                        to="/filter3"
                        className="dropdown-list mob-ham"
                        onClick={handleDropdown}
                      >
                        Filter3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        ) : null}

        {sortable.read ? (
          <li>
            <NavLink
              to="/sortable"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-sort" style={{ marginLeft: "1rem" }}></i>
              <span className="list-name">Sortable</span>
            </NavLink>
          </li>
        ) : null}

        {slideshow.read ? (
          <li>
            <NavLink
              to="/slideshow"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-photo-video"></i>
              <span className="list-name">Slideshow</span>
            </NavLink>
          </li>
        ) : null}

        <li>
          <NavLink
            to="/note"
            className="list non-active mob-ham"
            onClick={handleActive}
          >
            <i className="fab fa-wpforms"></i>
            <span className="list-name">Note</span>
          </NavLink>
        </li>
      </ul>

      {ROLE.map((elem) => {
        return (
          <input
            key={elem._id}
            type="text"
            className="uk-hidden"
            id="id"
            defaultValue={elem._id}
          />
        );
      })}
    </>
  );
};

export default Sidebar;
