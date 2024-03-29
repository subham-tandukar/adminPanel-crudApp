import React, { useContext, useEffect, useState } from "react";
import NoteContext from "./noteContext";
import $ from "jquery";
import { toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import { Fetchdata } from "../../hooks/getData";
import NavbarContext from "../navbar-context";

function NoteState(props) {
  const { baseURL } = useContext(NavbarContext);
  const initialValue = {
    title: "",
    description: "",
    noteStatus: "",
  };

  const [inputData, setInputData] = useState(initialValue);

  const [reload, setReload] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [noteData, setNoteData] = useState([]);
  const [originalList, setOriginalList] = useState(null);
  console.log("get Note data", noteData);

  // add note-----------------------------
  const addNote = () => {
    const dataForm = {
      title: inputData.title,
      description: inputData.description,
      noteStatus: inputData.noteStatus,
      FetchURL: `${baseURL}/addNote`,
      Type: "POST",
    };
    console.log(dataForm);
    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success("Note added sucessfully", {
          theme: "light",
        });
        setReload(!reload);
        $(".add-note-bg").fadeOut(300);
        $(".add-note").slideUp(500);
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  // get Note---------------------------------
  const [chooseStatus, setChooseStatus] = useState("");

  useEffect(() => {
    getNoteData();
  }, [reload, chooseStatus]);

  const getNoteData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getNoteData?noteStatus=${chooseStatus}`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.NoteData ? result.NoteData : "";
        setNoteData(postResult);
        setOriginalList(postResult);
        setLoading(false);
      } else {
        setNoteData([]);
        setLoading(false);
      }
    });
  };

  // view Note---------------------------------
  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-note-bg").fadeIn(300);
    $(".view-note").slideDown(500);
  };

  const id = viewID;

  const viewData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getNote/${id}`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.NoteList[0] ? result.NoteList[0] : "";
        setView(postResult);
        setLoading(false);
      } else {
        setView([]);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    viewData();
  }, [id, reload]);

  // edit Note----------------------------------------
  const [perEditSubmit, setPerEditSubmit] = useState(false);
  const [perID, setPerId] = useState(null);

  const handleEdit = (data) => {
    setPerId(data._id);
    $(".edit-note-bg").fadeIn(300);
    $(".edit-note").slideDown(500);
    setInputData({
      title: data.title,
      description: data.description,
      noteStatus: data.noteStatus,
    });
  };

  const editid = perID;

  const editNote = () => {
    const dataForm = {
      title: inputData.title,
      description: inputData.description,
      noteStatus: inputData.noteStatus,
      FetchURL: `${baseURL}/updateNote/${editid}`,
      Type: "PATCH",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success("Note updated sucessfully", {
          theme: "light",
        });
        setReload(!reload);
        $(".edit-note-bg").fadeOut(300);
        $(".edit-note").slideUp(500);
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  // delete note-----------------------------------
  const [deleteID, setDeleteId] = useState(null);

  const handleDelete = (data) => {
    setDeleteId(data._id);
    $(".delete-note-bg").fadeIn(300);
    $(".delete-note").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteNote = () => {
    const dataForm = {
      FetchURL: `${baseURL}/deleteNote/${deleteid}`,
      Type: "DELETE",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success("Note deleted sucessfully", {
          theme: "light",
        });
        setReload(!reload);
        $(".delete-note-bg").fadeOut(300);
        $(".delete-note").slideUp(500);
        getNoteData();
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
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
        setNoteData,
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
        chooseStatus,
        setChooseStatus,
        originalList,
        setOriginalList,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
