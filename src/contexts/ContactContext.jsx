import { createContext, useState } from "react";

const ContactContext = createContext({
    name: null,
    phone: null
});

export function ContactContextProvider({ children }) {
    const [name, setName] = useState("a");
    const [phone, setPhone] = useState("1");

    function changeName(name) {
        setName(name)
    }

    function changePhone(phone) {
        setPhone(phone)
    }

    const context = {
        name: name,
        phone: phone,
    }

    return (
        <ContactContext.Provider value={context}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContext;