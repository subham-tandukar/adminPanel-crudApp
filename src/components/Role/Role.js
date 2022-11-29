import React, { useContext, useState } from "react";
import RoleContext from "../context/role context folder/roleContext";
import { ToastContainer } from "react-toastify";
import { GrFormClose } from "react-icons/gr";
import $ from "jquery";
import DataTable from "react-data-table-component";
import AddRolePopup from "./AddRolePopup";
import ViewRolePopup from "./ViewRolePopup";
import EditRolePopup from "./EditRolePopup";
import DeleteRolePopup from "./DeleteRolePopup";
import PermissionContext from "../context/permission context folder/permissionContext";

const Role = () => {
  const {
    setInputData,
    initialValue,
    roleData,
    handleEdit,
    handleView,
    handleDelete,
    loading,
  } = useContext(RoleContext);

  const { role } = useContext(PermissionContext);

  const handleAdd = () => {
    $(".add-role-bg").fadeIn(300);
    $(".add-role").slideDown(500);
    setInputData(initialValue);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const ROLE = roleData.filter(
    (item) =>
      item.roleName &&
      item.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClear = () => {
    setSearchTerm("");
  };

  const columns = [
    {
      name: "S.N.",
      width: "60px",
      center: true,
      cell: (row, index) => index + 1,
    },
    {
      name: "Role",
      //   width: "150px",
      sortable: true,
      filterable: true,
      selector: (row) => row.roleName,
    },

    {
      name: "Action",
      center: true,
      width: "200px",
      selector: (row) => {
        return (
          <>
            <span className="uk-margin-right" uk-tooltip="View">
              <i className="fas fa-eye" onClick={() => handleView(row)}></i>
            </span>

            {role.update ? (
              <span className="uk-margin-right" uk-tooltip="Edit">
                <i className="fas fa-edit" onClick={() => handleEdit(row)}></i>
              </span>
            ) : null}

            {role.deleted ? (
              <span uk-tooltip="Delete">
                <i
                  className="fas fa-trash-alt"
                  onClick={() => handleDelete(row)}
                ></i>
              </span>
            ) : null}
          </>
        );
      },
    },
  ];

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className=" title uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
        <h4>
          <i className="fas fa-user-tag uk-margin-small-right"></i>
          Role
        </h4>
        <div>
          {role.write ? (
            <button className="uk-button" onClick={handleAdd}>
              + Add Role
            </button>
          ) : null}
        </div>
      </div>

      <div className="content_wrapper">
        <DataTable
          columns={columns}
          data={ROLE}
          // customStyles={customStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="335px"
          highlightOnHover
          pointerOnHover
          progressPending={loading}
          responsive
          subHeader
          dense
          striped
          subHeaderComponent={
            <>
              <div className="filter uk-flex uk-flex-wrap">
                <div className="filter-option">
                  <input
                    type="text"
                    className="uk-input searchField"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <div
                    className="clear"
                    onClick={handleClear}
                    uk-tooltip="Clear"
                  >
                    <GrFormClose size="1.5rem" />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>

      <AddRolePopup />
      <ViewRolePopup />
      <EditRolePopup />
      <DeleteRolePopup />
    </>
  );
};

export default Role;
