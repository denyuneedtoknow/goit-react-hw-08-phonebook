import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { connect } from "react-redux";
import * as actions from "./redux/Contacts/actions";

function App({ initContacts, consolingUp, consolingDown }) {
  const [contacts, setContacts] = useState(initContacts);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("contacts")) {
  //     const listOfContacts = JSON.parse(localStorage.getItem("contacts"));
  //     setContacts(listOfContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  function handleSubmit({ name, number }) {
    const obj = { id: uuidv4(), name, number };

    const knownContact = contacts.find((contact) => {
      return contact.name === obj.name;
    });
    if (knownContact) {
      return alert(`Sorry, contact ${obj.name} already existing`);
    } else {
      setContacts([...contacts, obj]);
    }
  }

  const filterChange = (e) => {
    setFilter(e.target.value);
    console.log(filter);
  };

  const loweredFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(loweredFilter)
  );

  const handleBtn = (e) => {
    console.log(e.target.id);
    setContacts(contacts.filter((contact) => contact.id !== e.target.id));
  };

  const onClickBtnUp = () => {
    console.log("click");
    consolingUp();
  };
  const onClickBtnDown = () => {
    console.log("click");
    consolingDown();
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleSubmit}></ContactForm>
      <Filter data={filter} handler={filterChange}></Filter>
      <h2>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        handleBtn={handleBtn}
      ></ContactList>
      <button onClick={onClickBtnUp} type="button">
        Up
      </button>
      <button onClick={onClickBtnDown} type="button">
        Down
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
  initContacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: () => dispatch(actions.addContact()),
  deleteContact: () => dispatch(actions.deleteContact()),
  consolingUp: () => dispatch(actions.consolingUp(5)),
  consolingDown: () => dispatch(actions.consolingDown(5)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
