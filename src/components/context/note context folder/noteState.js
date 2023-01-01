import React, { useContext, useEffect, useState } from "react";
import NoteContext from "./noteContext";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import AuthContext from "../auth-context";
import AssignUserContext from "../assign user context folder/assignUserContext";

function NoteState(props) {
  // const baseURL = "https://adminpanel-crudapp.herokuapp.com";
  // const baseURL = "https://role-and-permission.herokuapp.com";
  // const baseURL = "https://web-production-cff8.up.railway.app";
  // const baseURL = "http://localhost:8003";

  const { baseURL } = useContext(AssignUserContext);
  const initialValue = {
    title: "",
    description: "",
  };

  const [inputData, setInputData] = useState(initialValue);

  const [reload, setReload] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [noteData, setNoteData] = useState([]);
  console.log("get Note data", noteData);

  // const addNote = () => {
  //   const dataForm = {
  //     name: inputData.name,
  //     email: inputData.email,
  //     number: inputData.number,
  //     address: inputData.address,
  //     FetchURL: "http://localhost:8003/addNote",
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

  // add note
  const addNote = async () => {
    const { title, description } = inputData;

    const response = await fetch(`${baseURL}/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const data = await response.json();
    console.log("addNote", data);

    if (response.status === 422 || !data) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success("Note added sucessfully", {
        theme: "light",
      });
      setReload(!reload);
      $(".add-note-bg").fadeOut(300);
      $(".add-note").slideUp(500);
    }
  };

  // get Note
  useEffect(() => {
    getNoteData();
  }, [reload]);

  const getNoteData = async (e) => {
    const response = await fetch(`${baseURL}/getData`, {
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
      setNoteData(data);
      setLoading(false);
    }
  };

  // view Note

  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-note-bg").fadeIn(300);
    $(".view-note").slideDown(500);
  };

  const id = viewID;

  const viewData = async () => {
    const response = await fetch(`${baseURL}/getNote/${id}`, {
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

  // edit Note
  const [perEditSubmit, setPerEditSubmit] = useState(false);
  const [perID, setPerId] = useState(null);

  const handleEdit = (data) => {
    setPerId(data._id);
    $(".edit-note-bg").fadeIn(300);
    $(".edit-note").slideDown(500);
    setInputData({
      title: data.title,
      description: data.description,
    });
  };

  const editid = perID;

  const editNote = async () => {
    const { title, description } = inputData;

    const response = await fetch(`${baseURL}/updateNote/${editid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const data = await response.json();
    console.log("editData", data);

    if (response.status === 422 || !data) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success("Note updated sucessfully", {
        theme: "light",
      });
      setReload(!reload);
      $(".edit-note-bg").fadeOut(300);
      $(".edit-note").slideUp(500);
    }
  };

  // delete note
  const [deleteID, setDeleteId] = useState(null);

  const handleDelete = (data) => {
    setDeleteId(data._id);
    $(".delete-note-bg").fadeIn(300);
    $(".delete-note").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteNote = async () => {
    const response = await fetch(`${baseURL}/deleteNote/${deleteid}`, {
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
      toast.success("Note deleted sucessfully", {
        theme: "light",
      });
      setReload(!reload);
      $(".delete-note-bg").fadeOut(300);
      $(".delete-note").slideUp(500);
      getNoteData();
    }
  };

  return (
    <NoteContext.Provider
      value={{
        inputData,
        setInputData,
        initialValue,
        formError,
        setFormError,
        isSubmit,
        setIsSubmit,
        addNote,
        noteData,
        setReload,
        reload,
        perEditSubmit,
        setPerEditSubmit,
        handleEdit,
        handleView,
        view,
        loading,
        editNote,
        handleDelete,
        deleteNote,
        // baseURL,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
