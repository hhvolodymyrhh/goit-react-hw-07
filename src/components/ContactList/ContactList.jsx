import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filterSlice.js';
export default function ContactList() {
  const contacts = useSelector(selectContacts); //--------------------------------
  const filterContact = useSelector(selectNameFilter); //--------------------------------

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase()) || contact.number.toString().includes(filterContact)
  ); //--------------------------------

  return (
    <ul className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))
      ) : (
        <li>
          <p className={css.emptyList}>List is empty</p>
        </li>
      )}
    </ul>
  );
}