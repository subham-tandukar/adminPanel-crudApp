import React, { useContext, useState, useEffect } from "react";
import logo from "../../img/logo.png";
import UserContext from "../context/note context folder/noteContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Login = () => {
  const { login } = useContext(AuthContext);
  const initialvalue = { email: "", password: "" };
  const [inputData, setInputData] = useState(initialvalue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.password) {
      errors.password = "Required";
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

  //   login api

  const loggedin = async () => {
    const { email, password } = inputData;

    const response = await fetch("http://localhost:8003/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log("login", data);

    if (response.status === 422) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success("Login sucessfull", {
        theme: "light",
      });
      localStorage.setItem("token", JSON.stringify(data));
      sessionStorage.setItem("token", JSON.stringify(data));
      login(data);
      navigate("/");
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      loggedin();
      setIsSubmit(false);
    }
  }, [formError]);

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
      <section className="login ">
        <div className="login-wrapper uk-grid uk-child-width-1-2@s uk-flex-middle uk-width-1-2@l uk-width-3-4@m uk-width-4-5">
          <div className="login-left">
            <img src={logo} alt="" />
            <h3>Shree Sundevi Organic Agriculture Co-operative Ltd.</h3>
            <span>Gajuri-1, Dhading</span>
          </div>

          <div className="login-right">
            <h3 className="uk-text-center">Admin Login</h3>
            <p>Email</p>
            <div>
              <input
                type="email"
                className="uk-input"
                name="email"
                onChange={handleChange}
                value={inputData.email}
              />
              <p className="errormsg ">{formError.email}</p>
            </div>
            <p className="uk-margin-top">Password</p>
            <div>
              <input
                type="password"
                className="uk-input"
                name="password"
                onChange={handleChange}
                value={inputData.password}
              />
              <p className="errormsg ">{formError.password}</p>
            </div>

            <button className="uk-button submit" onClick={handleSubmit}>
              Submit
            </button>
            <p className="athr">by Elite infotech</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
