import React, { useContext, useEffect, useState } from "react";
import RoleContext from "./roleContext";
import $ from "jquery";
import { toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import AuthContext from "../auth-context";
import AssignUserContext from "../assign user context folder/assignUserContext";

function RoleState(props) {
  const { baseURL } = useContext(AssignUserContext);
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
    assignUser: {
      read: checked,
      write: checked,
      update: checked,
      deleted: checked,
    },
    // user: {
    //   read: checked,
    //   write: checked,
    //   update: checked,
    //   deleted: checked,
    // },
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
    // dashboard: {
    //   read: checked,
    //   write: checked,
    //   update: checked,
    //   deleted: checked,
    // },
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
  console.log("get role data", roleData);

  // add role
  const addRole = async () => {
    const {
      roleName,
      role,
      permission,
      assignUser,
      // user,
      form,
      filter,
      sortable,
      // dashboard,
      slideshow,
    } = inputData;

    const response = await fetch(`${baseURL}/addRole`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roleName,
        role,
        permission,
        assignUser,
        // user,
        form,
        filter,
        sortable,
        // dashboard,
        slideshow,
      }),
    });
    const data = await response.json();
    console.log("addRole", data);

    if (response.status === 422) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success("Role added sucessfully", {
        theme: "light",
      });
      setReload(!reload);
      $(".add-role-bg").fadeOut(300);
      $(".add-role").slideUp(500);
    }
  };

  // get role
  useEffect(() => {
    getRoleData();
  }, [reload]);

  const getRoleData = async (e) => {
    const response = await fetch(`${baseURL}/getRoleData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);

    if (response.status === 422) {
      console.log("error");
    } else {
      setRoleData(data);
      setLoading(false);
    }
  };

  console.log("roledata", roleData);

  // view role
  const [viewID, setViewId] = useState("");
  const [view, setView] = useState([]);

  const handleView = (data) => {
    setViewId(data._id);
    $(".view-role-bg").fadeIn(300);
    $(".view-role").slideDown(500);
  };

  const id = viewID;

  const viewData = async () => {
    const response = await fetch(`${baseURL}/getRole/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("datsassaa", data);

    if (response.status === 422) {
      console.log("error");
    } else {
      setView(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    viewData();
  }, [id, reload]);

  // edit role
  const [perEditSubmit, setPerEditSubmit] = useState(false);
  const [perID, setPerId] = useState(null);
  const [roleEdit, setRoleEdit] = useState("");

  const handleEdit = (data) => {
    setPerId(data._id);
    setRoleEdit(data.roleName);
    $(".edit-role-bg").fadeIn(300);
    $(".edit-role").slideDown(500);
    setInputData({
      role: data.roleName,
    });
  };

  const editid = perID;

  const editRole = async () => {
    const { roleName, role } = inputData;

    const response = await fetch(`${baseURL}/updateRole/${editid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roleName,
        role,
      }),
    });
    const data = await response.json();
    console.log("editData", data);

    if (response.status === 422) {
      toast.error("This role already exist", {
        theme: "light",
      });
    } else {
      toast.success(`Role ${roleEdit} updated sucessfully`, {
        theme: "light",
      });
      setReload(!reload);
      $(".edit-role-bg").fadeOut(300);
      $(".edit-role").slideUp(500);
    }
  };

  //   delete role
  const [deleteID, setDeleteId] = useState(null);
  const [roleDelete, setRoleDelete] = useState("");

  const handleDelete = (data) => {
    setDeleteId(data._id);
    setRoleDelete(data.roleName);
    $(".delete-role-bg").fadeIn(300);
    $(".delete-role").slideDown(500);
  };

  const deleteid = deleteID;

  const deleteRole = async () => {
    const response = await fetch(`${baseURL}/deleteRole/${deleteid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("deleteData", data);

    if (response.status === 422) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success(`Role ${roleDelete} deleted sucessfully`, {
        theme: "light",
      });
      setReload(!reload);
      $(".delete-role-bg").fadeOut(300);
      $(".delete-role").slideUp(500);
      getRoleData();
    }
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
      }}
    >
      {props.children}
    </RoleContext.Provider>
  );
}

export default RoleState;
