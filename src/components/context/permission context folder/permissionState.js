import React, { useContext, useEffect, useState } from "react";
import PermissionContext from "./permissionContext";
import $ from "jquery";
import { toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import UserContext from "../note context folder/noteContext";
import RoleContext from "../role context folder/roleContext";

function PermissionState(props) {
  const { base_url } = useContext(UserContext);
  const initialRoleValue = {
    roleName: "",
    closeChecked: "",
  };

  const [inputRoleData, setInputRoleData] = useState(initialRoleValue);

  const [roleId, setRoleId] = useState("");

  // view role data list
  const [readRole, setReadRole] = useState(false);
  const [writeRole, setWriteRole] = useState(false);
  const [updateRole, setUpdateRole] = useState(false);
  const [deletedRole, setDeletedRole] = useState(false);

  const [readPermission, setReadPermission] = useState(false);
  const [writePermission, setWritePermission] = useState(false);
  const [updatePermission, setUpdatePermission] = useState(false);
  const [deletedPermission, setDeletedPermission] = useState(false);

  const [readAssignUser, setReadAssignUser] = useState(false);
  const [writeAssignUser, setWriteAssignUser] = useState(false);
  const [updateAssignUser, setUpdateAssignUser] = useState(false);
  const [deletedAssignUser, setDeletedAssignUser] = useState(false);

  // const [readUser, setReadUser] = useState(false);
  // const [writeUser, setWriteUser] = useState(false);
  // const [updateUser, setUpdateUser] = useState(false);
  // const [deletedUser, setDeletedUser] = useState(false);

  const [readForm, setReadForm] = useState(false);
  const [writeForm, setWriteForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [deletedForm, setDeletedForm] = useState(false);

  const [readFilter, setReadFilter] = useState(false);
  const [writeFilter, setWriteFilter] = useState(false);
  const [updateFilter, setUpdateFilter] = useState(false);
  const [deletedFilter, setDeletedFilter] = useState(false);

  const [readSortable, setReadSortable] = useState(false);
  const [writeSortable, setWriteSortable] = useState(false);
  const [updateSortable, setUpdateSortable] = useState(false);
  const [deletedSortable, setDeletedSortable] = useState(false);

  // const [readDashboard, setReadDashboard] = useState(false);
  // const [writeDashboard, setWriteDashboard] = useState(false);
  // const [updateDashboard, setUpdateDashboard] = useState(false);
  // const [deletedDashboard, setDeletedDashboard] = useState(false);

  const [readSlideshow, setReadSlideshow] = useState(false);
  const [writeSlideshow, setWriteSlideshow] = useState(false);
  const [updateSlideshow, setUpdateSlideshow] = useState(false);
  const [deletedSlideshow, setDeletedSlideshow] = useState(false);

  const id = roleId;

  console.log("id", id);

  const viewData = async () => {
    const response = await fetch(`${base_url}/getRole/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.status === 422) {
      console.log("error");
    } else {
      setReadRole(data.role[0].read);
      setWriteRole(data.role[0].write);
      setUpdateRole(data.role[0].update);
      setDeletedRole(data.role[0].deleted);

      setReadPermission(data.permission[0].read);
      setWritePermission(data.permission[0].write);
      setUpdatePermission(data.permission[0].update);
      setDeletedPermission(data.permission[0].deleted);

      setReadAssignUser(data.assignUser[0].read);
      setWriteAssignUser(data.assignUser[0].write);
      setUpdateAssignUser(data.assignUser[0].update);
      setDeletedAssignUser(data.assignUser[0].deleted);

      // setReadUser(data.user[0].read);
      // setWriteUser(data.user[0].write);
      // setUpdateUser(data.user[0].update);
      // setDeletedUser(data.user[0].deleted);

      setReadForm(data.form[0].read);
      setWriteForm(data.form[0].write);
      setUpdateForm(data.form[0].update);
      setDeletedForm(data.form[0].deleted);

      setReadFilter(data.filter[0].read);
      setWriteFilter(data.filter[0].write);
      setUpdateFilter(data.filter[0].update);
      setDeletedFilter(data.filter[0].deleted);

      setReadSortable(data.sortable[0].read);
      setWriteSortable(data.sortable[0].write);
      setUpdateSortable(data.sortable[0].update);
      setDeletedSortable(data.sortable[0].deleted);

      // setReadDashboard(data.dashboard[0].read);
      // setWriteDashboard(data.dashboard[0].write);
      // setUpdateDashboard(data.dashboard[0].update);
      // setDeletedDashboard(data.dashboard[0].deleted);

      setReadSlideshow(data.slideshow[0].read);
      setWriteSlideshow(data.slideshow[0].write);
      setUpdateSlideshow(data.slideshow[0].update);
      setDeletedSlideshow(data.slideshow[0].deleted);
    }
  };

  useEffect(() => {
    viewData();
  }, [id]);

  // assign permission
  const assignPermission = async () => {
    const response = await fetch(`${base_url}/updateRole/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: {
          read: readRole,
          write: writeRole,
          update: updateRole,
          deleted: deletedRole,
        },
        permission: {
          read: readPermission,
          write: writePermission,
          update: updatePermission,
          deleted: deletedPermission,
        },
        assignUser: {
          read: readAssignUser,
          write: writeAssignUser,
          update: updateAssignUser,
          deleted: deletedAssignUser,
        },
        // user: {
        //   read: readUser,
        //   write: writeUser,
        //   update: updateUser,
        //   deleted: deletedUser,
        // },
        form: {
          read: readForm,
          write: writeForm,
          update: updateForm,
          deleted: deletedForm,
        },
        filter: {
          read: readFilter,
          write: writeFilter,
          update: updateFilter,
          deleted: deletedFilter,
        },
        sortable: {
          read: readSortable,
          write: writeSortable,
          update: updateSortable,
          deleted: deletedSortable,
        },
        // dashboard: {
        //   read: readDashboard,
        //   write: writeDashboard,
        //   update: updateDashboard,
        //   deleted: deletedDashboard,
        // },
        slideshow: {
          read: readSlideshow,
          write: writeSlideshow,
          update: updateSlideshow,
          deleted: deletedSlideshow,
        },
      }),
    });
    const data = await response.json();
    console.log("editData", data);

    if (response.status === 422) {
      toast.error(data.message, {
        theme: "light",
      });
    } else {
      toast.success(`Permission assigned sucessfully`, {
        theme: "light",
      });
    }
  };

  const [role, setRole] = useState([]);
  const [permission, setPermission] = useState([]);
  const [assignUser, setAssignUser] = useState([]);
  const [form, setForm] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortable, setSortable] = useState([]);
  // const [dashboard, setDashboard] = useState([]);
  const [slideshow, setSlideshow] = useState([]);

  // localStorage.setItem("ROLE", JSON.stringify(role.read));
  // localStorage.setItem("PERMISSION", JSON.stringify(permission.read));
  // localStorage.setItem("USER", JSON.stringify(assignUser.read));
  // localStorage.setItem("FORM", JSON.stringify(form.read));
  // localStorage.setItem("FILTER", JSON.stringify(filter.read));
  // localStorage.setItem("SORTABLE", JSON.stringify(sortable.read));
  // localStorage.setItem("SLIDESHOW", JSON.stringify(slideshow.read));

  return (
    <PermissionContext.Provider
      value={{
        role,
        setRole,
        permission,
        setPermission,
        assignUser,
        setAssignUser,
        form,
        setForm,
        filter,
        setFilter,
        sortable,
        setSortable,
        slideshow,
        setSlideshow,

        roleId,
        setRoleId,
        inputRoleData,
        setInputRoleData,
        initialRoleValue,
        assignPermission,

        readRole,
        writeRole,
        updateRole,
        deletedRole,
        setReadRole,
        setWriteRole,
        setUpdateRole,
        setDeletedRole,
        assignPermission,

        readPermission,
        writePermission,
        updatePermission,
        deletedPermission,
        setReadPermission,
        setWritePermission,
        setUpdatePermission,
        setDeletedPermission,

        readAssignUser,
        writeAssignUser,
        updateAssignUser,
        deletedAssignUser,
        setReadAssignUser,
        setWriteAssignUser,
        setUpdateAssignUser,
        setDeletedAssignUser,

        // readUser,
        // writeUser,
        // updateUser,
        // deletedUser,
        // setReadUser,
        // setWriteUser,
        // setUpdateUser,
        // setDeletedUser,

        readForm,
        writeForm,
        updateForm,
        deletedForm,
        setReadForm,
        setWriteForm,
        setUpdateForm,
        setDeletedForm,

        readFilter,
        writeFilter,
        updateFilter,
        deletedFilter,
        setReadFilter,
        setWriteFilter,
        setUpdateFilter,
        setDeletedFilter,

        readSortable,
        writeSortable,
        updateSortable,
        deletedSortable,
        setReadSortable,
        setWriteSortable,
        setUpdateSortable,
        setDeletedSortable,

        // readDashboard,
        // writeDashboard,
        // updateDashboard,
        // deletedDashboard,
        // setReadDashboard,
        // setWriteDashboard,
        // setUpdateDashboard,
        // setDeletedDashboard,

        readSlideshow,
        writeSlideshow,
        updateSlideshow,
        deletedSlideshow,
        setReadSlideshow,
        setWriteSlideshow,
        setUpdateSlideshow,
        setDeletedSlideshow,
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  );
}

export default PermissionState;
