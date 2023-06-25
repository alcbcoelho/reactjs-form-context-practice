import { useContext } from "react";
import ContactContext from "../contexts/ContactContext";

export default function Contacts() {
  const { contacts, addContact } = useContext(ContactContext);

  return (
    <>
      <h1>Contacts</h1>
      {
        (contacts.length > 0) &&
        <ol>
          {contacts.map((contact, key) => <li key={key}>{contact.name} - {contact.phone}</li>)}
        </ol>
      }
    </>
  );
}