import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import AssignUserContext from "../context/assign user context folder/assignUserContext";
import RoleContext from "../context/role context folder/roleContext";

const AddAssignUserPopup = () => {
  const { roleData } = useContext(RoleContext);
  const {
    inputData,
    setInputData,
    formError,
    initialValue,
    setFormError,
    isSubmit,
    setIsSubmit,
    addUser,
  } = useContext(AssignUserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleClose = () => {
    $(".add-assign-user-bg").fadeOut(300);
    $(".add-assign-user").slideUp(500);
    setInputData(initialValue);
    setFormError({});
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.roleName) {
      errors.roleName = "Required";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
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
      addUser();
      setIsSubmit(false);
    }
  }, [formError]);

  return (
    <>
      <section className="popup-bg add-assign-user-bg">
        <div className="popup add-assign-user">
          <div className="popup-head">
            <h4>Add User</h4>
            <div className="close" onClick={handleClose}>
              <GrFormClose size="2rem" color="#fff" />
            </div>
          </div>

          <div className="popup-body">
            <form>
              <div className="uk-grid uk-child-width-1-2@s">
                <div className="form-wrapper">
                  <label htmlFor="">
                    Full Name<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="name"
                    onChange={handleChange}
                    value={inputData.name}
                  />
                  <p className="errormsg">{formError.name}</p>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="">
                    Email<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="email"
                    className="uk-input"
                    name="email"
                    onChange={handleChange}
                    value={inputData.email}
                  />
                  <p className="errormsg ">{formError.email}</p>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="">
                    Password<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="password"
                    className="uk-input"
                    name="password"
                    onChange={handleChange}
                    value={inputData.password}
                  />
                  <p className="errormsg ">{formError.password}</p>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="">
                    Select role<sup className="sup-col">*</sup>
                  </label>
                  <select
                    class="uk-select"
                    value={inputData.roleName}
                    name="roleName"
                    onChange={handleChange}
                  >
                    <option disabled value="" selected>
                      Select Role
                    </option>
                    {roleData.map((list) => (
                      <>
                        <option key={list._id} value={list.roleName}>
                          {list.roleName}
                        </option>
                      </>
                    ))}
                  </select>
                  <p className="errormsg ">{formError.roleName}</p>
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

export default AddAssignUserPopup;
