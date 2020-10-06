import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./components/nav";
import Menu from "./components/menu";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Footer from "./components/footer";
import Inscription from "./containers/inscription";
import Horaires from "./containers/horaires";
import Tarifs from "./containers/tarifs";
import CertificatMedical from "./containers/certificat-medical";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="inscription" element={<Inscription />}></Route>
        <Route path="horaires" element={<Horaires />}></Route>
        <Route path="tarifs" element={<Tarifs />}></Route>
        <Route
          path="certificat-medical"
          element={<CertificatMedical />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
