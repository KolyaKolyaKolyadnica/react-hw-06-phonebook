// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import phonebookActions from 'redux/phonebook/phonebook-actions';
import style from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  const contactsListItems = contacts.map(contact => {
    return (
      <li key={contact.id} className={style.listItem}>
        <p className={style.contact}>
          {contact.name}: {contact.number}
        </p>

        <button value={contact.id} onClick={onDeleteContact}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        <ul className={style.list}>{contactsListItems}</ul>
      )}
    </>
  );
}

const mapStateToProps = state => {
  const normalizedFilter = state.phonebook.filter.toLocaleLowerCase();
  const visibleContacts = state.phonebook.contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: e =>
    dispatch(phonebookActions.deleteContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   onDeleteContact: PropTypes.func,
// };
