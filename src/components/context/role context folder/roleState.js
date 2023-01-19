import React, { useContext, useEffect, useState } from "react";
import RoleContext from "./roleContext";
import $ from "jquery";
import { toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import NavbarContext from "../navbar-context";
import { Fetchdata } from "../../hooks/getData";

function RoleState(props) {
  const { baseURL } = useContext(NavbarContext);
  const [checked, setChecked] = useState(false);
  const initialValue = {
    roleName: "",
    role: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    permission: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    user: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    form: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    filter: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    sortable: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    slideshow: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
  };

  const [inputData, setInputData] = useState(initialValue);

  const [reload, setReload] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(true);

  const [roleData, setRoleData] = useState([]);
  const [originalList, setOriginalList] = useState(null);
  console.log("get role data", roleData);

  // add role-----------------------------------
  const addRole = () => {
    const dataForm = {
      roleName: inputData.roleName,
      role: inputData.role,
      permission: inputData.permission,
      user: inputData.user,
      form: inputData.form,
      filter: inputData.permission,
      sortable: inputData.permission,
      slideshow: inputData.slideshow,
      FetchURL: `${baseURL}/addRole`,
      Type: "POST",
    };
    console.log(dataForm);
    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success("Role added sucessfully", {
          theme: "light",
        });
        setReload(!reload);
        $(".add-role-bg").fadeOut(300);
        $(".add-role").slideUp(500);
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  // get role-----------------------------------
  useEffect(() => {
    getRoleData();
  }, [reload]);

  const getRoleData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getRoleData`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.RoleData ? result.RoleData : "";
        setRoleData(postResult);
        setOriginalList(postResult);
        setLoading(false);
      } else {
        setRoleData([]);
        setLoading(false);
      }
    });
  };

  console.log("roledata", roleData);

  // view role-----------------------------------
  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-role-bg").fadeIn(300);
    $(".view-role").slideDown(500);
  };

  const id = viewID;

  const viewData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getRole/${id}`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.RoleList[0] ? result.RoleList[0] : "";
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

  // edit role-----------------------------------
  const [perEditSubmit, setPerEditSubmit] = useState(false);
  const [perID, setPerId] = useState(null);
  const [roleEdit, setRoleEdit] = useState("");

  const handleEdit = (data) => {
    setPerId(data._id);
    setRoleEdit(data.roleName);
    $(".edit-role-bg").fadeIn(300);
    $(".edit-role").slideDown(500);
    setInputData({
      roleName: data.roleName,
    });
  };

  const editid = perID;

  const editRole = () => {
    const dataForm = {
      roleName: inputData.roleName,
      FetchURL: `${baseURL}/updateRole/${editid}`,
      Type: "PATCH",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success(`Role ${roleEdit} updated sucessfully`, {
          theme: "light",
        });
        setReload(!reload);
        $(".edit-role-bg").fadeOut(300);
        $(".edit-role").slideUp(500);
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  //   delete role-----------------------------------
  const [deleteID, setDeleteId] = useState(null);
  const [roleDelete, setRoleDelete] = useState("");

  const handleDelete = (data) => {
    setDeleteId(data._id);
    setRoleDelete(data.roleName);
    $(".delete-role-bg").fadeIn(300);
    $(".delete-role").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteRole = () => {
    const dataForm = {
      FetchURL: `${baseURL}/deleteRole/${deleteid}`,
      Type: "DELETE",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success(`Role ${roleDelete} deleted sucessfully`, {
          theme: "light",
        });
        setReload(!reload);
        $(".delete-role-bg").fadeOut(300);
        $(".delete-role").slideUp(500);
        getRoleData();
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  return (
    <RoleContext.Provider
      value={{
        inputData,
        setInputData,
        initialValue,
        reload,
        setReload,
        formError,
        setFormError,
        isSubmit,
        setIsSubmit,
        addRole,
        roleData,
        setRoleData,
        perEditSubmit,
        setPerEditSubmit,
        handleEdit,
        handleView,
        view,
        loading,
        editRole,
        handleDelete,
        deleteRole,
        checked,
        setChecked,
        originalList,
        setOriginalList,
      }}
    >
      {props.children}
    </RoleContext.Provider>
  );
}

export default RoleState;
