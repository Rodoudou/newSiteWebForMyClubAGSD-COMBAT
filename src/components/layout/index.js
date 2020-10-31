import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Footer from "../footer";
import Menu from "../menu";

const Layout = ({
  handleClickFaceBook,
  handleClickInstagram,
  handleClickYoutube,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <Menu
              handleClickFaceBook={handleClickFaceBook}
              handleClickInstagram={handleClickInstagram}
              handleClickYoutube={handleClickYoutube}
            />
          }
        />
        <Route
          path="/*"
          element={
            <Footer
              handleClickFaceBook={handleClickFaceBook}
              handleClickInstagram={handleClickInstagram}
              handleClickYoutube={handleClickYoutube}
            />
          }
        />
      </Routes>
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
