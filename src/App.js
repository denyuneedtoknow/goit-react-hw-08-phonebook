import React from "react";
import { Route, Routes, } from "react-router-dom";

import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import PhonebookView from "./Views/PhonebookView";
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import RegistrationView from './Views/RegistrationView'
import { PublicRoute } from './Routes/PublicRoute'
import { PrivateRoute } from './Routes/PrivateRoute'


const isAuth = true


function App() {

  return (<div className="App">
    <Navigation />

    <Routes>
      <Route path="/" element={<PrivateRoute isAuth={isAuth} component={HomeView} />} />

      <Route path="/login" element={<PrivateRoute isAuth={isAuth} component={LoginView} />} />

      <Route path="/register" element={<PrivateRoute isAuth={isAuth} component={RegistrationView} />} />

      <Route path="/contacts" element={<PrivateRoute isAuth={isAuth} component={PhonebookView} />} />

    </Routes>
  </div>
  );
}



export default App