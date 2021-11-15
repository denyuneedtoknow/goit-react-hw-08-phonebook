import React from "react";

import "./App.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";


function App() {




  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter />
      <h2>Contacts</h2>
      <ContactList />

    </div>
  );
}



export default App