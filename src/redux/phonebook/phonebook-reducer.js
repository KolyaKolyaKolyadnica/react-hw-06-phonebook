import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(defaultContacts, builder => {
  builder
    .addCase(phonebookActions.addNewContact, (state, { payload }) => [
      ...state,
      payload,
    ])
    .addCase(phonebookActions.deleteContact, (state, { payload }) =>
      state.filter(contact => contact.id !== payload)
    );
});

const filter = createReducer('', builder => {
  builder.addCase(phonebookActions.filterByName, (_, { payload }) => payload);
});

const phonebookReducer = combineReducers({ contacts, filter });

export default phonebookReducer;
