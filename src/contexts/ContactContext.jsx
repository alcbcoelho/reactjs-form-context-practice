import { createContext, useState } from "react";

const ContactContext = createContext({
    contacts: [],
    addContact: () => {}
});

export function ContactContextProvider({ children }) {
    const [contacts, setContacts] = useState([]);

    function addContact(contact) {
        setContacts([...contacts, contact])
    }

    const context = {
        contacts: contacts,
        addContact: addContact
    }

    return (
        <ContactContext.Provider value={context}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContext;