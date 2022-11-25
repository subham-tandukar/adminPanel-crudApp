import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Form from "./components/Form";
import UserState from "./components/context/userState";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import Filter1 from "./components/Filter1";
import Filter2 from "./components/Filter2";
import Filter3 from "./components/Filter3";
import Slideshow from "./components/Slideshow";
import Sortable from "./components/Sortable";

const App = () => {
  return (
    <>
      <UserState>
        <Layout>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/form" element={<Form />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/filter1" element={<Filter1 />} />
            <Route path="/filter2" element={<Filter2 />} />
            <Route path="/filter3" element={<Filter3 />} />
            <Route path="/slideshow" element={<Slideshow />} />
            <Route path="/sortable" element={<Sortable />} />
          </Routes>
        </Layout>
      </UserState>
    </>
  );
};

export default App;
