import Contact from "components/Contact/Contact";

const ContactList = ({contactsProp, removeContact}) => {
    // console.log(contactsProp);
    return (
        <ul>
            {contactsProp.map(contact => <Contact key={contact.id} contactProp={contact} removeContact={removeContact}/>)}
        </ul>
    );
};

export default ContactList;