import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import RoleContext from "../context/role context folder/roleContext";
import PermissionContext from "../context/permission context folder/permissionContext";
import UserContext from "../context/user context folder/userContext";

const Sidebar = ({ userDetails, handleMobHam }) => {
  const { roleData } = useContext(RoleContext);
  const { base_url } = useContext(UserContext);

  const {
    role,
    setRole,
    permission,
    setPermission,
    assignUser,
    setAssignUser,
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
  console.log("assignUser", assignUser);
  console.log("form", form);
  console.log("filter", filter);
  console.log("sortable", sortable);
  // console.log("dashboard", dashboard);
  console.log("slideshow", slideshow);

  const roleName = userDetails.roleName;

  const ROLE = roleData.filter((obj) => {
    return obj.roleName === roleName;
  });

  const id = $("#id").val();

  // set permission

  const PermData = async () => {
    const response = await fetch(`${base_url}/getRole/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.status === 422) {
      console.log("error");
    } else {
      setRole(data.role[0]);
      setPermission(data.permission[0]);
      setAssignUser(data.assignUser[0]);
      setForm(data.form[0]);
      setFilter(data.filter[0]);
      setSortable(data.sortable[0]);
      // setDashboard(data.dashboard[0]);
      setSlideshow(data.slideshow[0]);
    }
  };

  useEffect(() => {
    PermData();
  }, [id]);

  const handleDropdown = () => {
    $("#dropdown-active").addClass("active");
  };
  const handleActive = () => {
    $("#dropdown-active").removeClass("active");
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

        {assignUser.read ? (
          <li>
            <NavLink
              to="/assign-user"
              className="list non-active"
              onClick={handleActive}
            >
              <i className="fas fa-user"></i>
              <span className="list-name">Assign User</span>
            </NavLink>
          </li>
        ) : null}

        {/* <li>
          <NavLink to="/user" className="list non-active" onClick={handleActive}>
            <i className="fas fa-user-tie"></i>
            <span className="list-name">User</span>
          </NavLink>
        </li> */}

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
                <div className="uk-accordion-content uk-margin-remove-top uk-hidden">
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

        {assignUser.read ? (
          <li>
            <NavLink
              to="/assign-user"
              className="list non-active mob-ham"
              onClick={handleActive}
            >
              <i className="fas fa-user"></i>
              <span className="list-name">Assign User</span>
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
