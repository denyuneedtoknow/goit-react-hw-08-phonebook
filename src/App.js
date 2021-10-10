import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    contact: null,
    filter: "",
  };

  resetForm = () => {
    this.setState({ name: " ", number: " " });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState({ contact: obj });
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, obj] };
    });
    this.resetForm();
  };
  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  handleBtn = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== e.target.id
      ),
    }));
  };
  filterChange = (e) => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  render() {
    const { name, number, filter } = this.state;

    const loweredFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(loweredFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        ></ContactForm>
        <Filter data={filter} handler={this.filterChange}></Filter>
        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          handleBtn={this.handleBtn}
        ></ContactList>
      </div>
    );
  }
}
export default App;
