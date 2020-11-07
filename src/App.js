import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import NotFound from "./containers/notFound";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Inscription from "./containers/inscription";
import Horaires from "./containers/horaires";
import Tarifs from "./containers/tarifs";
import CertificatMedical from "./containers/certificat-medical";

import Layout from "./components/layout";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faKey } from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee, faKey);


const App = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
            />
          }
        >
          <Route exact path="/" element={<Home />} />
          <Route
            path="contact"
            element={
              <Contact/>
            }
          />
          <Route path="inscription" element={<Inscription />} />
          <Route path="horaires" element={<Horaires />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="certificat-medical" element={<CertificatMedical />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
