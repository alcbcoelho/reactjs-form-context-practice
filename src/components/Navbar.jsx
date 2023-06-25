import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
            <NavLink to="/new-contact">New Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
