import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { connect } from "react-redux";
import * as actions from "./redux/Contacts/actions";

function App({ filter, contacts, consolingUp, consolingDown }) {
  const handleSubmit = (e) => {
    const obj = {
      id: uuidv4(),
      name: e.name,
      number: e.number,
    };
    const knownContact = contacts.find((contact) => {
      return contact.name === obj.name;
    });
  };

  //     if (knownContact) {
  //       return alert(`Sorry, contact ${obj.name} already existing`);
  //     } else {
  //       this.setState({ contact: obj });
  //       this.setState((prevState) => {
  //         return { contacts: [...prevState.contacts, obj] };
  //       });
  //     }
  //   };

  const handleBtn = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== e.target.id
      ),
    }));
  };
  const filterChange = (e) => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  const onClickBtnUp = () => {
    console.log("click");
    consolingUp();
  };
  const onClickBtnDown = () => {
    console.log("click");
    consolingDown();
  };
  //   render() {
  // const { filter } = this.state;
  const loweredFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(loweredFilter)
  );
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit}></ContactForm>
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
// }

const mapStateToProps = (state) => ({
  filter: state.filter,
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: () => dispatch(actions.addContact()),
  deleteContact: () => dispatch(actions.deleteContact()),
  consolingUp: () => dispatch(actions.consolingUp(5)),
  consolingDown: () => dispatch(actions.consolingDown(5)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
