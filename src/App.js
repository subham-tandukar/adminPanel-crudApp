import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Filter1 from "./components/Filter/Filter1";
import Filter2 from "./components/Filter/Filter2";
import Filter3 from "./components/Filter/Filter3";
import Slideshow from "./components/Slideshow/Slideshow";
import Sortable from "./components/Sortable/Sortable";
import User from "./components/User/User";
import UserState from "./components/context/user context folder/userState";
import RoleState from "./components/context/role context folder/roleState";
import Role from "./components/Role/Role";
import Permission from "./components/permission/Permission";
import PermissionState from "./components/context/permission context folder/permissionState";
import AssignUserState from "./components/context/assign user context folder/assignUserState";
import AssignUser from "./components/Assign User/AssignUser";
import Login from "./components/Login/Login";
import AuthContext from "./components/context/auth-context";
import ErrorPage from "./components/ErrorPage";
import PermissionContext from "./components/context/permission context folder/permissionContext";

const App = () => {
  const { User } = useContext(AuthContext);

  // const role = JSON.parse(localStorage.getItem("ROLE"));
  // const permission = JSON.parse(localStorage.getItem("PERMISSION"));
  // const assignUser = JSON.parse(localStorage.getItem("USER"));
  // const form = JSON.parse(localStorage.getItem("FORM"));
  // const filter = JSON.parse(localStorage.getItem("FILTER"));
  // const sortable = JSON.parse(localStorage.getItem("SORTABLE"));
  // const slideshow = JSON.parse(localStorage.getItem("SLIDESHOW"));

  return (
    <>
      <Routes>
        {!User && <Route path="*" element={<Login />} />}
        {User && <Route path="/login" element={<Navigate to="/" />} />}
      </Routes>

      <div className="app">
        {User && (
          <>
            <UserState>
              <RoleState>
                <PermissionState>
                  <AssignUserState>
                    <Layout>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/role" element={<Role />} />
                        <Route path="/permission" element={<Permission />} />
                        <Route path="/assign-user" element={<AssignUser />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/filter1" element={<Filter1 />} />
                        <Route path="/filter2" element={<Filter2 />} />
                        <Route path="/filter3" element={<Filter3 />} />
                        <Route path="/sortable" element={<Sortable />} />
                        <Route path="/slideshow" element={<Slideshow />} />
                        {/* 
                        {role.read ? (
                          <Route path="/role" element={<Role />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        <Route path="/user" element={<User />} />

                        {permission.read ? (
                          <Route path="/permission" element={<Permission />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        {assignUser.read ? (
                          <Route path="/assign-user" element={<AssignUser />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        {form.read ? (
                          <Route path="/form" element={<Form />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        {filter.read ? (
                          <>
                            <Route path="/filter1" element={<Filter1 />} />
                            <Route path="/filter2" element={<Filter2 />} />
                            <Route path="/filter3" element={<Filter3 />} />
                          </>
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        {sortable.read ? (
                          <Route path="/sortable" element={<Sortable />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                        {slideshow.read ? (
                          <Route path="/slideshow" element={<Slideshow />} />
                        ) : (
                          <Route path="*" element={<ErrorPage />} />
                        )}

                         */}

                        {/* Page Not Found */}
                        <Route path="*" element={<ErrorPage />} />
                      </Routes>
                    </Layout>
                  </AssignUserState>
                </PermissionState>
              </RoleState>
            </UserState>
          </>
        )}
      </div>
    </>
  );
};

export default App;
