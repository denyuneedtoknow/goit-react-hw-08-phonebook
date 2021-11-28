import ContactList from "../../Components/ContactList/";
import Filter from "../../Components/Filter";
import ContactForm from "../../Components/ContactForm";



const PhonebookView = () => {

    return (<>
        <div className="PhonebookView">
            <h1>Phonebook</h1>
            <ContactForm />
            <Filter />
            <h2>Contacts</h2>
            {/* <ContactList /> */}
        </div>
    </>)
}

export default PhonebookView