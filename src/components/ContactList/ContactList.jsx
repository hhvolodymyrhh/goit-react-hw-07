import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filterSlice.js';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const { error } = useSelector(state => state.contacts);
  const filteredContacts = useSelector(selectFilteredContacts);



  return (
    <ul className={css.contactList}>
      {filteredContacts.length > 0 && !error ? (
        filteredContacts?.map(contact => (
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