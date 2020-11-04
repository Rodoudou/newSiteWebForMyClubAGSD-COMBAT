import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Footer from "../footer";
import Menu from "../menu";
import Nave from "../nave";

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
          <Nave/>
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
