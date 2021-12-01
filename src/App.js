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
import { useDispatch, } from "react-redux";
import { useEffect } from "react";
import { currentUser } from './redux/Users/users-operations'
import web from "./Images/web.jpg"





function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentUser())
  })



  return (


    <div className="App" style={{
      backgroundImage: `url(${web})`, backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<PrivateRoute component={HomeView} />} />

        <Route path="/login" element={<PublicRoute component={LoginView} />} />

        <Route path="/register" element={<PublicRoute component={RegistrationView} />} />

        <Route path="/contacts" element={<PrivateRoute component={PhonebookView} />} />

      </Routes>
      {/* <img src={web} alt={'Web'}></img> */}
    </div>

  );
}



export default App