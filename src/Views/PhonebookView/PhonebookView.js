import ContactList from "../../Components/ContactList/";
import Filter from "../../Components/Filter";
import ContactForm from "../../Components/ContactForm";
import { useSelector } from "react-redux";
import { getIsRefreshing } from '../../redux/Users/users-selectors'
import SimpleSnackbar from '../../Components/Miscellaneous/snackbar'


const PhonebookView = () => {

    const handleEvent = (e) => {
        console.log(e);
    }



    const isReloading = useSelector(getIsRefreshing)
    return (
        !isReloading && <>
            <div className="PhonebookView">
                <button type='button' onClick={handleEvent}>click</button>



                <SimpleSnackbar message={'some message'} onClick={handleEvent} />




                <h1>Phonebook</h1>
                <ContactForm />
                <Filter />
                <h2>Contacts</h2>
                <ContactList />
            </div>
        </>)
}

export default PhonebookView