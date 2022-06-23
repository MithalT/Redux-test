//import { createStore } from 'redux';

import {configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authReducer from './auth-slice';



/*
const counterReducer = (state = initialCounterState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
}
const store = createStore(counterReducer);
*/


// its like createStore but configureStore merging multiple reducer into one reducer easier
/*const store = configureStore({
    reducer : counterSlice.reducer
});*/

const store = configureStore({
    reducer : {
        counterReducer : counterReducer,
        authReducer : authReducer
    }
});




export default store;