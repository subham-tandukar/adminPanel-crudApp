import React, { useContext, useEffect, useState } from "react";
import AssignUserContext from "./assignUserContext";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import NoteContext from "../note context folder/noteContext";
import AuthContext from "../auth-context";

function AssignUserState(props) {
  // const baseURL = "https://adminpanel-crudapp.herokuapp.com";
  // const { baseURL } = useContext(AuthContext);
  // const baseURL = process.env.REACT_APP_URL;
  // const baseURL = "http://localhost:8003";
  const baseURL = "https://web-production-cff8.up.railway.app";

  const [userDetails, setUserDetails] = useState("");
  const initialValue = {
    name: "",
    email: "",
    password: "",
    roleName: "",
  };

  const [inputData, setInputData] = useState(initialValue);

  const [reload, setReload] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState([]);
  console.log("get user data", userData);

  // add user
  const addUser = async () => {
    const { name, email, password, roleName } = inputData;

    const response = await fetch(`${baseURL}/addAssignUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        roleName,
      }),
    });
    const data = await response.json();
    console.log("addUser", data);

    if (response.status === 422 || !data) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success("User added sucessfully", {
        theme: "light",
      });
      setReload(!reload);
      $(".add-assign-user-bg").fadeOut(300);
      $(".add-assign-user").slideUp(500);
    }
  };

  // get user
  useEffect(() => {
    getUserData();
  }, [reload]);

  const getUserData = async (e) => {
    const response = await fetch(`${baseURL}/getAssignUserData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);

    if (response.status === 422 || !data) {
      console.log("error");
    } else {
      setUserData(data.users);
      setLoading(false);
    }
  };

  // view user

  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-assign-user-bg").fadeIn(300);
    $(".view-assign-user").slideDown(500);
  };

  const id = viewID;

  const viewData = async () => {
    const response = await fetch(`${baseURL}/getAssignUser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("datsassaa", data);

    if (response.status === 422 || !data) {
      console.log("error");
    } else {
      setView(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    viewData();
  }, [id, reload]);

  // edit user
  const [perEditSubmit, setPerEditSubmit] = useState(false);
  const [perID, setPerId] = useState(null);
  const [userEdit, setUserEdit] = useState("");

  const handleEdit = (data) => {
    setPerId(data._id);
    setUserEdit(data.name);
    $(".edit-assign-user-bg").fadeIn(300);
    $(".edit-assign-user").slideDown(500);
    setInputData({
      name: data.name,
      email: data.email,
      password: data.password,
      roleName: data.roleName,
    });
  };

  const editid = perID;

  const editUser = async () => {
    const { name, email, password, roleName } = inputData;

    const response = await fetch(`${baseURL}/updateAssignUser/${editid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        roleName,
      }),
    });
    const data = await response.json();
    console.log("editData", data);

    if (response.status === 422 || !data) {
      toast.error("This email is already used", {
        theme: "light",
      });
    } else {
      toast.success(`User ${userEdit} updated sucessfully`, {
        theme: "light",
      });
      setReload(!reload);
      $(".edit-assign-user-bg").fadeOut(300);
      $(".edit-assign-user").slideUp(500);
    }
  };

  // delete user
  const [deleteID, setDeleteId] = useState(null);
  const [userDelete, setUserDelete] = useState("");

  const handleDelete = (data) => {
    setDeleteId(data._id);
    setUserDelete(data.name);
    $(".delete-assign-user-bg").fadeIn(300);
    $(".delete-assign-user").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteUser = async () => {
    const response = await fetch(`${baseURL}/deleteAssignUser/${deleteid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("deleteData", data);

    if (response.status === 422 || !data) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success(`User ${userDelete} deleted sucessfully`, {
        theme: "light",
      });
      setReload(!reload);
      $(".delete-assign-user-bg").fadeOut(300);
      $(".delete-assign-user").slideUp(500);
      getUserData();
    }
  };

  return (
    <AssignUserContext.Provider
      value={{
        inputData,
        setInputData,
        initialValue,
        formError,
        setFormError,
        isSubmit,
        setIsSubmit,
        addUser,
        userData,
        setReload,
        reload,
        perEditSubmit,
        setPerEditSubmit,
        handleEdit,
        handleView,
        view,
        loading,
        editUser,
        handleDelete,
        deleteUser,
        baseURL,
        userDetails,
        setUserDetails,
      }}
    >
      {props.children}
    </AssignUserContext.Provider>
  );
}

export default AssignUserState;
