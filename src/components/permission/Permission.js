import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import PermissionContext from "../context/permission context folder/permissionContext";
import RoleContext from "../context/role context folder/roleContext";

const Permission = () => {
  const { roleData } = useContext(RoleContext);

  const {
    setRoleId,
    inputRoleData,
    setInputRoleData,
    assignPermission,

    readRole,
    writeRole,
    updateRole,
    deletedRole,
    setReadRole,
    setWriteRole,
    setUpdateRole,
    setDeletedRole,

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
  } = useContext(PermissionContext);

  const [idRole, setIdRole] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputRoleData({ ...inputRoleData, [name]: value });
    setIdRole(!idRole);
  };

  useEffect(() => {
    setRoleId(inputRoleData.roleName);
  }, [idRole]);

  const PermissionTable = [
    {
      name: "Role",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadRole(e.target.checked)}
          checked={readRole}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteRole(e.target.checked)}
          checked={writeRole}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateRole(e.target.checked)}
          checked={updateRole}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedRole(e.target.checked)}
          checked={deletedRole}
        />
      ),
    },

    {
      name: "Permission",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadPermission(e.target.checked)}
          checked={readPermission}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWritePermission(e.target.checked)}
          checked={writePermission}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdatePermission(e.target.checked)}
          checked={updatePermission}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedPermission(e.target.checked)}
          checked={deletedPermission}
        />
      ),
    },

    {
      name: "Assign User",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadAssignUser(e.target.checked)}
          checked={readAssignUser}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteAssignUser(e.target.checked)}
          checked={writeAssignUser}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateAssignUser(e.target.checked)}
          checked={updateAssignUser}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedAssignUser(e.target.checked)}
          checked={deletedAssignUser}
        />
      ),
    },

    // {
    //   name: "User",
    //   read: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setReadUser(e.target.checked)}
    //       checked={readUser}
    //     />
    //   ),
    //   write: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setWriteUser(e.target.checked)}
    //       checked={writeUser}
    //     />
    //   ),
    //   update: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setUpdateUser(e.target.checked)}
    //       checked={updateUser}
    //     />
    //   ),
    //   deleted: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setDeletedUser(e.target.checked)}
    //       checked={deletedUser}
    //     />
    //   ),
    // },

    {
      name: "Form",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadForm(e.target.checked)}
          checked={readForm}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteForm(e.target.checked)}
          checked={writeForm}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateForm(e.target.checked)}
          checked={updateForm}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedForm(e.target.checked)}
          checked={deletedForm}
        />
      ),
    },

    {
      name: "Filter",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadFilter(e.target.checked)}
          checked={readFilter}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteFilter(e.target.checked)}
          checked={writeFilter}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateFilter(e.target.checked)}
          checked={updateFilter}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedFilter(e.target.checked)}
          checked={deletedFilter}
        />
      ),
    },

    {
      name: "Sortable",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadSortable(e.target.checked)}
          checked={readSortable}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteSortable(e.target.checked)}
          checked={writeSortable}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateSortable(e.target.checked)}
          checked={updateSortable}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedSortable(e.target.checked)}
          checked={deletedSortable}
        />
      ),
    },

    // {
    //   name: "Dashboard",
    //   read: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setReadDashboard(e.target.checked)}
    //       checked={readDashboard}
    //     />
    //   ),
    //   write: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setWriteDashboard(e.target.checked)}
    //       checked={writeDashboard}
    //     />
    //   ),
    //   update: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setUpdateDashboard(e.target.checked)}
    //       checked={updateDashboard}
    //     />
    //   ),
    //   deleted: (
    //     <input
    //       className="uk-checkbox"
    //       type="checkbox"
    //       name="closeChecked"
    //       onChange={(e) => setDeletedDashboard(e.target.checked)}
    //       checked={deletedDashboard}
    //     />
    //   ),
    // },

    {
      name: "Slideshow",
      read: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setReadSlideshow(e.target.checked)}
          checked={readSlideshow}
        />
      ),
      write: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setWriteSlideshow(e.target.checked)}
          checked={writeSlideshow}
        />
      ),
      update: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setUpdateSlideshow(e.target.checked)}
          checked={updateSlideshow}
        />
      ),
      deleted: (
        <input
          className="uk-checkbox"
          type="checkbox"
          name="closeChecked"
          onChange={(e) => setDeletedSlideshow(e.target.checked)}
          checked={deletedSlideshow}
        />
      ),
    },
  ];

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
      <div className=" title uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
        <h4>
          <i className="fas fa-check-circle uk-margin-small-right"></i>
          Permission
        </h4>
      </div>

      <div className="content_wrapper" style={{ overflow: "auto" }}>
        <div className="uk-flex uk-flex-middle uk-flex-between">
          <div>
            <select
              class="uk-select"
              value={inputRoleData.roleName}
              name="roleName"
              onChange={handleChange}
            >
              <option disabled value="" selected>
                Select Role
              </option>
              {roleData.map((list) => (
                <>
                  <option key={list._id} value={list._id}>
                    {list.roleName}
                  </option>
                </>
              ))}
            </select>
          </div>

          <button className="uk-button" onClick={() => assignPermission()}>
            Assign Permission
          </button>
        </div>

        <table className="uk-table uk-table-striped uk-table-hover">
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Read</th>
              <th>Write</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {PermissionTable.map((elem) => {
              const { name, read, write, update, deleted } = elem;
              return (
                <>
                  <tr>
                    <td>{name}</td>
                    <td>{read}</td>
                    <td>{write}</td>
                    <td>{update}</td>
                    <td>{deleted}</td>
                  </tr>
                </>
              );
            })}
            {/* <td>Role</td>
              <td>
                {" "}
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  name="closeChecked"
                  onChange={(e) => setReadRole(e.target.checked)}
                  checked={readRole}
                />
              </td>

              <td>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  name="closeChecked"
                  onChange={(e) => setWriteRole(e.target.checked)}
                  checked={writeRole}
                />
              </td>

              <td>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  name="closeChecked"
                  onChange={(e) => setUpdateRole(e.target.checked)}
                  checked={updateRole}
                />
              </td>

              <td>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  name="closeChecked"
                  onChange={(e) => setDeletedRole(e.target.checked)}
                  checked={deletedRole}
                />
              </td> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Permission;
