import React from "react";
import { Route, Routes, } from "react-router-dom";

import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import PhonebookView from "./Views/PhonebookView";
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import RegistrationView from './Views/RegistrationView'


function App() {

  return (<div className="App">
    <Navigation />

    <Routes>
      <Route path="/" element={<HomeView />} />

      <Route path="/login" element={<LoginView />} />

      <Route path="/register" element={<RegistrationView />} />

      <Route path="/contacts" element={<PhonebookView />} />

    </Routes>
  </div>
  );
}



export default App