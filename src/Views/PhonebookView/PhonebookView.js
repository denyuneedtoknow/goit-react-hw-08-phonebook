import ContactList from "../../Components/ContactList/";
import Filter from "../../Components/Filter";
import ContactForm from "../../Components/ContactForm";
import { useSelector } from "react-redux";
import { getIsRefreshing } from '../../redux/Users/users-selectors'



const PhonebookView = () => {
    const isReloading = useSelector(getIsRefreshing)
    return (
        !isReloading && <>
            <div className="PhonebookView">
                <h1>Phonebook</h1>
                <ContactForm />
                <Filter />
                <h2>Contacts</h2>
                <ContactList />
            </div>
        </>)
}

export default PhonebookView