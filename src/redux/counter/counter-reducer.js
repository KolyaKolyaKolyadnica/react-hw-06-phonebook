import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterActions from './counter-actions';

const initialState = { counterValue: 0 };

const reducer = createReducer(initialState, {
  [counterActions.increment]: (state, { payload }) => ({
    ...state,
    counterValue: state.counterValue + payload,
  }),
  [counterActions.decrement]: (state, { payload }) => ({
    ...state,
    counterValue: state.counterValue - payload,
  }),
});

const counterReducer = combineReducers({ reducer });

export default counterReducer;
