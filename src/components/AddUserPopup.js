import React, { useContext, useEffect } from "react";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import UserContext from "./context/userContext";

const AddUserPopup = () => {
  const {
    inputData,
    setInputData,
    formError,
    initialValue,
    setFormError,
    isSubmit,
    setIsSubmit,
    addUser,
  } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleClose = () => {
    $(".add-user-bg").fadeOut(300);
    $(".add-user").slideUp(500);
    setInputData(initialValue);
    setFormError({});
    setIsSubmit(false);
  };

  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    const digits = /^\d{10}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.number) {
      errors.number = "Required";
    } else if (!numv.test(values.number)) {
      errors.number = "Must be digits";
    } else if (!digits.test(values.number)) {
      errors.number = "Must be 10 digits";
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
      <section className="popup-bg add-user-bg">
        <div className="popup add-user">
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
                    Name<sup className="sup-col">*</sup>
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
                    Number<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="number"
                    onChange={handleChange}
                    value={inputData.number}
                  />
                  <p className="errormsg ">{formError.number}</p>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="">
                    Address<sup className="sup-col">*</sup>
                  </label>
                  <input
                    type="text"
                    className="uk-input"
                    name="address"
                    onChange={handleChange}
                    value={inputData.address}
                  />
                  <p className="errormsg ">{formError.address}</p>
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

export default AddUserPopup;
