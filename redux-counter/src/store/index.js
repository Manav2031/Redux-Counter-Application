import {createStore} from 'redux';

const reducerFn = (state={counter:0}, action) => {
    //Limitations
    //1. Should be a synchronous function
    //2. We should not mutate the original state.

    if(action.type==="INC")
    return {counter:state.counter+1};

    if(action.type==="DEC")
    return {counter:state.counter-1};

    if(action.type==="ADD")
    return {counter:state.counter+action.payload};

    return state;
};

const store = createStore(reducerFn);
export default store;