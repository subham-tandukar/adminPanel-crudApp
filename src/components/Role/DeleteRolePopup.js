import React, { useContext } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import RoleContext from "../context/role context folder/roleContext";

const DeleteRolePopup = () => {
  const { deleteRole } = useContext(RoleContext);

  const handleClose = () => {
    $(".delete-role-bg").fadeOut(300);
    $(".delete-role").slideUp(500);
  };

  const handleDelete = () => {
    deleteRole();
  };

  return (
    <>
      <section className="popup-bg delete-role-bg">
        <div className="popup delete-role">
          <div className="popup-head">
            <h4>Delete Role</h4>
            <div className="close" onClick={handleClose}>
              <GrFormClose size="2rem" color="#fff" />
            </div>
          </div>

          <div className="popup-body">
            <p style={{ color: "#000" }}>Are you sure you want to delete?</p>
          </div>
          <div className="popup-footer">
            <button className="uk-button cancel-btn" onClick={handleDelete}>
              Delete
            </button>
            <button
              className="uk-button "
              style={{
                background: "#ff0002",
                borderColor: "#ff0002",
                color: "#fff",
                marginLeft: "0.5rem",
              }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteRolePopup;
