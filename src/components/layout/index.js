import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Footer from "../footer";
import Menu from "../menu";
import Nav from "../nav";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <Menu/>
          }
        />
          <Menu/>
        <Route
          path="/*"
          element={
            <Footer/>
          }
        />
      </Routes>
          <Nav/>
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
