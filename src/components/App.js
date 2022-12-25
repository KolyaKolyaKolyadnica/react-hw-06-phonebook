import { Component } from 'react';
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

  filterByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <div className={style.container}>
          <div className={style.menu}>
            <h1>Phonebook</h1>

            <ContactForm />

            <Filter />
          </div>

          <div className={style.contacts}>
            <h2>Contacts</h2>

            <ContactList />
          </div>
        </div>
        <Counter />
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

export default connect(mapStateToProps, null)(App);
