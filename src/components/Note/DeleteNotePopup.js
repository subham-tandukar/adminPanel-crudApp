import React, { useContext } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import NoteContext from "../context/note context folder/noteContext";

const DeleteNotePopup = () => {
  const { deleteNote } = useContext(NoteContext);

  const handleClose = () => {
    $(".delete-note-bg").fadeOut(300);
    $(".delete-note").slideUp(500);
  };

  const handleDelete = () => {
    deleteNote();
  };

  return (
    <>
      <section className="popup-bg delete-note-bg">
        <div className="popup delete-note">
          <div className="popup-head">
            <h4>Delete Note</h4>
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

export default DeleteNotePopup;
