import { ADD } from '../actionTypes';

const initialState = {
    counter: 0,
}

export const number = (state = initialState, action) => {
    var newState = { ...state };

    switch (action.type) {
        case ADD:
            newState.counter = newState.counter + action.payload;
            return newState;
        default:
            return state;
    }
};