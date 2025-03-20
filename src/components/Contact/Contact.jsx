import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
// import { PhoneAlt, User } from 'react-icons';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactItem}>
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
        <button
          className={css.contactButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          ×
        </button>
      </div>
    </>
  );
}