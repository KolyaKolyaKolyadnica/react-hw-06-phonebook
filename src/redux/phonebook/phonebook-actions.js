import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addNewContact = createAction(
  'phonebook/addNewContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  })
);

const deleteContact = createAction('phonebook/deleteContact');

const filterByName = createAction('phonebook/filterByName');

const phonebookActions = { addNewContact, deleteContact, filterByName };

export default phonebookActions;
