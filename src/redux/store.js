import { combineReducers, createStore } from 'redux';

import phonebookReducer from './phonebook/phonebook-reducer';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer);

export default store;
