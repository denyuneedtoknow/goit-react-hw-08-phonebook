import { func } from "prop-types";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";

const startingContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]



function App() {
    const [contacts, setContacts] = useState(startingContacts)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        if (localStorage.getItem('contacts')) {
            const listOfContacts = JSON.parse(localStorage.getItem('contacts'));
            setContacts(listOfContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    function handleSubmit({ name, number }) {
        const obj = { id: uuidv4(), name, number }

        console.log(obj);
        const knownContact = contacts.find(contact => { return contact.name === obj.name })
        if (knownContact) { return alert(`Sorry, contact ${obj.name} already existing`) }
        else {
            setContacts([...contacts, obj])

        }
        console.log(contacts);
    }

    const filterChange = (e) => {
        setFilter(e.target.value)
        console.log(filter);
    };

    const loweredFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(loweredFilter))


    const handleBtn = (e) => {
        console.log(e.target.id);
        setContacts(contacts.filter(
            (contact) => contact.id !== e.target.id
        ))

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
        </div>
    );
}




export default App