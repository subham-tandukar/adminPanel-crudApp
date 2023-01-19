import React, { useContext, useEffect, useState } from "react";
import PermissionContext from "./permissionContext";
import { toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import NavbarContext from "../navbar-context";
import { Fetchdata } from "../../hooks/getData";

function PermissionState(props) {
  const { baseURL } = useContext(NavbarContext);
  const initialRoleValue = {
    roleName: "",
    closeChecked: "",
  };

  const [inputRoleData, setInputRoleData] = useState(initialRoleValue);

  const [roleId, setRoleId] = useState("");

  // view role data list-----------------------------------
  const [readRole, setReadRole] = useState(false);
  const [writeRole, setWriteRole] = useState(false);
  const [updateRole, setUpdateRole] = useState(false);
  const [deletedRole, setDeletedRole] = useState(false);

  const [readPermission, setReadPermission] = useState(false);
  const [writePermission, setWritePermission] = useState(false);
  const [updatePermission, setUpdatePermission] = useState(false);
  const [deletedPermission, setDeletedPermission] = useState(false);

  const [readUser, setReadUser] = useState(false);
  const [writeUser, setWriteUser] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [deletedUser, setDeletedUser] = useState(false);

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

  const [readSlideshow, setReadSlideshow] = useState(false);
  const [writeSlideshow, setWriteSlideshow] = useState(false);
  const [updateSlideshow, setUpdateSlideshow] = useState(false);
  const [deletedSlideshow, setDeletedSlideshow] = useState(false);

  const id = roleId;

  console.log("id", id);

  const viewData = () => {
    const dataForm = {
      FetchURL: `${baseURL}/getRole/${id}`,
      Type: "GET",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        const postResult = result.RoleList[0] ? result.RoleList[0] : "";

        setReadRole(postResult.role[0].read);
        setWriteRole(postResult.role[0].write);
        setUpdateRole(postResult.role[0].update);
        setDeletedRole(postResult.role[0].deleted);

        setReadPermission(postResult.permission[0].read);
        setWritePermission(postResult.permission[0].write);
        setUpdatePermission(postResult.permission[0].update);
        setDeletedPermission(postResult.permission[0].deleted);

        setReadUser(postResult.user[0].read);
        setWriteUser(postResult.user[0].write);
        setUpdateUser(postResult.user[0].update);
        setDeletedUser(postResult.user[0].deleted);

        setReadForm(postResult.form[0].read);
        setWriteForm(postResult.form[0].write);
        setUpdateForm(postResult.form[0].update);
        setDeletedForm(postResult.form[0].deleted);

        setReadFilter(postResult.filter[0].read);
        setWriteFilter(postResult.filter[0].write);
        setUpdateFilter(postResult.filter[0].update);
        setDeletedFilter(postResult.filter[0].deleted);

        setReadSortable(postResult.sortable[0].read);
        setWriteSortable(postResult.sortable[0].write);
        setUpdateSortable(postResult.sortable[0].update);
        setDeletedSortable(postResult.sortable[0].deleted);

        setReadSlideshow(postResult.slideshow[0].read);
        setWriteSlideshow(postResult.slideshow[0].write);
        setUpdateSlideshow(postResult.slideshow[0].update);
        setDeletedSlideshow(postResult.slideshow[0].deleted);
      } else {
        console.log(result.Message);
      }
    });
  };

  useEffect(() => {
    viewData();
  }, [id]);

  //  permission-----------------------------------
  const assignPermission = () => {
    const dataForm = {
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
      user: {
        read: readUser,
        write: writeUser,
        update: updateUser,
        deleted: deletedUser,
      },
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
      slideshow: {
        read: readSlideshow,
        write: writeSlideshow,
        update: updateSlideshow,
        deleted: deletedSlideshow,
      },
      FetchURL: `${baseURL}/updateRole/${id}`,
      Type: "PATCH",
    };

    Fetchdata(dataForm).then(function (result) {
      console.log("result", result);
      if (result.StatusCode === 200) {
        toast.success(`Permission assiged sucessfully`, {
          theme: "light",
        });
      } else {
        toast.error(result.Message, {
          theme: "light",
        });
      }
    });
  };

  const [role, setRole] = useState([]);
  const [permission, setPermission] = useState([]);
  const [user, setUser] = useState([]);
  const [form, setForm] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortable, setSortable] = useState([]);
  // const [dashboard, setDashboard] = useState([]);
  const [slideshow, setSlideshow] = useState([]);

  // localStorage.setItem("ROLE", JSON.stringify(role.read));
  // localStorage.setItem("PERMISSION", JSON.stringify(permission.read));
  // localStorage.setItem("USER", JSON.stringify(User.read));
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
        user,
        setUser,
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

        readUser,
        writeUser,
        updateUser,
        deletedUser,
        setReadUser,
        setWriteUser,
        setUpdateUser,
        setDeletedUser,

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
