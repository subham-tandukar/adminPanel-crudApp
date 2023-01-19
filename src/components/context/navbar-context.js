import React, { useState } from "react";

const NavbarContext = React.createContext();

export const NavbarContextProvider = (props) => {
  // const baseURL = "https://web-production-cff8.up.railway.app";
  const baseURL = "http://localhost:8003";
  // const baseURL = process.env.REACT_APP_URL;
  // const baseURL = process.env.LOCAL_BASE_URL;

  const [userDetails, setUserDetails] = useState("");

  return (
    <NavbarContext.Provider
      value={{
        userDetails,
        setUserDetails,
        baseURL,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContext;
