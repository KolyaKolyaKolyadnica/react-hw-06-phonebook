import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterActions from './counter-actions';

const initialState = { counterValue: 0 };

const reducer = createReducer(initialState, builder => {
  builder.addCase(counterActions.increment, (state, { payload }) => ({
    counterValue: state.counterValue + payload,
  }));
  builder.addCase(counterActions.decrement, (state, { payload }) => ({
    counterValue: state.counterValue - payload,
  }));
});

const counterReducer = combineReducers({ reducer });

export default counterReducer;

// const reducer = createReducer(initialState, {
//   [counterActions.increment]: (state, { payload }) => ({
//     ...state,
//     counterValue: state.counterValue + payload,
//   }),
//   [counterActions.decrement]: (state, { payload }) => ({
//     ...state,
//     counterValue: state.counterValue - payload,
//   }),
// });
