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

    // contact: null,
    filter: "",
  };

  handleSubmit = (e) => {
    const obj = {
      id: uuidv4(),
      name: e.name,
      number: e.number,
    };
    const knownContact = this.state.contacts.find((contact) => {
      return contact.name === obj.name;
    });

    if (knownContact) {
      return alert(`Sorry, contact ${obj.name} already existing`);
    } else {
      this.setState({ contact: obj });
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, obj] };
      });
    }
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
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const loweredFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(loweredFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit}></ContactForm>
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
