import React, { useContext, useEffect, useState } from "react";
import UserContext from "./userContext";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";

function UserState(props) {
  // const base_url = "https://adminpanel-crudapp.herokuapp.com";
  // const base_url = "https://role-and-permission.herokuapp.com";

  const base_url = "http://localhost:8003";
  const initialValue = {
    name: "",
    email: "",
    number: "",
    address: "",
  };

  const [inputData, setInputData] = useState(initialValue);

  const [reload, setReload] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState([]);
  console.log("get user data", userData);

  // const addUser = () => {
  //   const dataForm = {
  //     name: inputData.name,
  //     email: inputData.email,
  //     number: inputData.number,
  //     address: inputData.address,
  //     FetchURL: "http://localhost:8003/addUser",
  //     Type: "POST",
  //   };
  //   console.log(dataForm);
  //   Fetchdata(dataForm).then(function (result) {
  //     console.log("result", result);
  //     if (result.status === 422) {
  //       alert("error");
  //     } else {
  //       alert("mdata added");
  //       $(".popup-bg").fadeOut(300);
  //       $(".popup").slideUp(600);
  //     }
  //   });
  // };

  // add user
  const addUser = async () => {
    const { name, email, number, address } = inputData;

    const response = await fetch(`${base_url}/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        address,
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
      $(".add-user-bg").fadeOut(300);
      $(".add-user").slideUp(500);
    }
  };

  // get user
  useEffect(() => {
    getUserData();
  }, [reload]);

  const getUserData = async (e) => {
    const response = await fetch(`${base_url}/getData`, {
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
      setUserData(data);
      setLoading(false);
    }
  };

  // view user

  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-user-bg").fadeIn(300);
    $(".view-user").slideDown(500);
  };

  const id = viewID;

  const viewData = async () => {
    const response = await fetch(`${base_url}/getUser/${id}`, {
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
    $(".edit-user-bg").fadeIn(300);
    $(".edit-user").slideDown(500);
    setInputData({
      name: data.name,
      email: data.email,
      number: data.number,
      address: data.address,
    });
  };

  const editid = perID;

  const editUser = async () => {
    const { name, email, number, address } = inputData;

    const response = await fetch(`${base_url}/updateUser/${editid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        address,
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
      $(".edit-user-bg").fadeOut(300);
      $(".edit-user").slideUp(500);
    }
  };

  // delete user
  const [deleteID, setDeleteId] = useState(null);
  const [userDelete, setUserDelete] = useState("");

  const handleDelete = (data) => {
    setDeleteId(data._id);
    setUserDelete(data.name);
    $(".delete-user-bg").fadeIn(300);
    $(".delete-user").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteUser = async () => {
    const response = await fetch(`${base_url}/deleteUser/${deleteid}`, {
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
      $(".delete-user-bg").fadeOut(300);
      $(".delete-user").slideUp(500);
      getUserData();
    }
  };

  return (
    <UserContext.Provider
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
        base_url,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
