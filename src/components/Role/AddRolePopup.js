import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import RoleContext from "../context/role context folder/roleContext";

const AddRolePopup = () => {
  const {
    inputData,
    setInputData,
    formError,
    initialValue,
    setFormError,
    isSubmit,
    setIsSubmit,
    addRole,
  } = useContext(RoleContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleClose = () => {
    $(".add-role-bg").fadeOut(300);
    $(".add-role").slideUp(500);
    setInputData(initialValue);
    setFormError({});
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.roleName) {
      errors.roleName = "Required";
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
      addRole();
      setIsSubmit(false);
    }
  }, [formError]);

  return (
    <>
      <section className="popup-bg add-role-bg">
        <div className="popup add-role">
          <div className="popup-head">
            <h4>Add Role</h4>
            <div className="close" onClick={handleClose}>
              <GrFormClose size="2rem" color="#fff" />
            </div>
          </div>

          <div className="popup-body">
            <form>
              <div className="uk-grid uk-child-width-1-2@s">
                <div className="form-wrapper">
                  <label htmlFor="">
                    Role Name<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="roleName"
                    onChange={handleChange}
                    value={inputData.roleName}
                  />
                  <p className="errormsg">{formError.roleName}</p>
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

export default AddRolePopup;
