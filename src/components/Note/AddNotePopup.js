import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import NoteContext from "../context/note context folder/noteContext";

const AddNotePopup = () => {
  const {
    inputData,
    setInputData,
    formError,
    initialValue,
    setFormError,
    isSubmit,
    setIsSubmit,
    addNote,
  } = useContext(NoteContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleClose = () => {
    $(".add-note-bg").fadeOut(300);
    $(".add-note").slideUp(500);
    setInputData(initialValue);
    setFormError({});
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    const digits = /^\d{10}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.noteStatus) {
      errors.noteStatus = "Required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(inputData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      addNote();
      setIsSubmit(false);
    }
  }, [formError]);

  return (
    <>
      <section className="popup-bg add-note-bg">
        <div className="popup add-note">
          <div className="popup-head">
            <h4>Add Note</h4>
            <div className="close" onClick={handleClose}>
              <GrFormClose size="2rem" color="#fff" />
            </div>
          </div>

          <div className="popup-body">
            <form>
              <div className="uk-grid uk-child-width-1-2@s">
                <div className="form-wrapper">
                  <label htmlFor="">
                    Title<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="title"
                    onChange={handleChange}
                    value={inputData.title}
                  />
                  <p className="errormsg">{formError.title}</p>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="">
                    Description<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="description"
                    onChange={handleChange}
                    value={inputData.description}
                  />
                  <p className="errormsg">{formError.description}</p>
                </div>

                <div className="form-wrapper">
                  <label htmlFor="">
                    Select status<sup className="sup-col">*</sup>
                  </label>
                  <select
                    class="uk-select"
                    value={inputData.noteStatus}
                    name="noteStatus"
                    onChange={handleChange}
                  >
                    <option disabled value="" selected>
                      Select status
                    </option>
                    <option value="0">Pending</option>
                    <option value="1">Success</option>
                    <option value="2">Failed</option>
                  </select>
                  <p className="errormsg ">{formError.noteStatus}</p>
                </div>
              </div>
            </form>
          </div>
          <div className="popup-footer">
            <button className="uk-button" onClick={handleSubmit}>
              Submit
            </button>
            <button className="uk-button cancel-btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNotePopup;
