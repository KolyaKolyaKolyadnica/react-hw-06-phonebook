import { connect } from 'react-redux';
import phonebookActions from 'redux/phonebook/phonebook-actions';
import ContactList from './ContactList';

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
