import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import NotFound from "./containers/notFound";
import Nav from "./components/nav";
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

//Simuler une connexion
// const fakeAuth ={
//   isAuthenticated:false,
//   authenticate(callback){
//     fakeAuth.isAuthenticated = true
//     setTimeout(callback, 100)
//   },
//   signout(callback){
//     fakeAuth.isAuthenticated = false
//     setTimeout(callback, 100)
//   }
// }

//   const Login = () => {

//     const navigate = useNavigate();
//     const location = useLocation();

//     const { from } = location.state || { from: '/public' };

//     const login = () => {
//       fakeAuth.authenticate(() => navigate(from, {replace: true}))

//     }

//     return (
//       <div>
//         <p>You must log in to view the page at </p>
//         <button onClick={login}>Log in</button>
//       </div>
//     )
//   }

// const Private =()=> <h2>Private Page</h2>

// const Public =()=> <h2>Public Page</h2>

// const AuthButton = () =>{
//   const navigate = useNavigate();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{' '}
//       <button
//       onClick={()=>{
//         fakeAuth.signout(()=> navigate('/'))
//       }}
//       >
//         Sign out
//       </button>
//     </p>
//   ):(
//     <p>You are not logged in.</p>
//   )
// }

// const PrivateRoute=({ ...props})=> {
//     const location = useLocation();

//     return fakeAuth.isAuthenticated ? (
//       <Route { ...props}/>
//     ): (
//         <Navigate to="/login" replace state={{from: location}}/>
//     )
//   }

const App = () => {
  // les States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClickFaceBook = () => {
    window.location = "https://www.facebook.com/agsdcombat";
  };

  const handleClickInstagram = () => {
    window.location = "https://www.instagram.com/agsdcombat";
  };

  const handleClickYoutube = () => {
    window.location =
      "https://www.youtube.com/channel/UCDUTivMSGwXPmzMIGMwgWUA";
  };

  return (
    <Router>
      <Nav />
      {/* <AuthButton/> */}
      <Routes>
        {/* <Route path="public" element={<Public/>}/> */}
        {/* <PrivateRoute path="private" element={<Private/>}/> */}
        {/* <Route path="login" element={<Login/>}/> */}
        <Route
          path="/"
          element={
            <Layout
              handleClickFaceBook={handleClickFaceBook}
              handleClickInstagram={handleClickInstagram}
              handleClickYoutube={handleClickYoutube}
            />
          }
        >
          <Route exact path="/" element={<Home />} />
          <Route
            path="contact"
            element={
              <Contact
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
              />
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
