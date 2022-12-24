import { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './App.module.css';
import Counter from './Counter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addNewContact = ({ name, number }) => {
  //   if (name.length === 0) {
  //     return;
  //   }

  //   if (this.state.contacts.some(contact => contact.name === name)) {
  //     return alert('This contact already exists');
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts],
  //     name: '',
  //     number: '',
  //   }));
  // };

  filterByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // deleteContact = e => {
  //   const deletedContactId = e.currentTarget.value;

  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(
  //       contact => contact.id !== deletedContactId
  //     ),
  //   }));
  // };

  componentDidMount() {
    try {
      const parsedLocalStorageContacts = JSON.parse(
        localStorage.getItem('contacts')
      );
      if (parsedLocalStorageContacts) {
        this.setState({ contacts: parsedLocalStorageContacts });
      }
    } catch (error) {
      console.error('Error ', error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    try {
      if (this.state.contacts !== prevState.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    } catch (error) {
      console.error('Error ', error);
    }
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <div className={style.container}>
          <div className={style.menu}>
            <h1>Phonebook</h1>

            <ContactForm />
            {/* <ContactForm onSubmit={this.addNewContact} /> */}

            <Filter filterValue={filter} onChangeFilter={this.filterByName} />
            {/* <Filter filterValue={filter} onChangeFilter={this.filterByName} /> */}
          </div>

          <div className={style.contacts}>
            <h2>Contacts</h2>

            <ContactList />

            {/* <ContactList
              contacts={visibleContacts}
              filterValue={filter}
              onDeleteContact={this.deleteContact}
            /> */}
          </div>
        </div>
        <Counter />
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state ', state);
  return {
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
