import { NEW_STACK, REMOVE_STACK, UPDATE_STACK } from '../actionTypes';

const initialState = {
    'l23': {
        name: 'Morning Routine',
        frequency: 'daily',
        habitKeys: ['432adfds34',],
        nextHabitInStackToDo: 'At 7:00am - Jog 2km',
        currentState: 'incomplete',
        log: {
            '08082020': 'missed'
        },
    },
}

const stacks = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case NEW_STACK:
            let stackId = Object.keys(action.payload)[0];
            newState[stackId] = action.payload[stackId];
            return newState;
        case REMOVE_STACK:
            delete newState[action.payload];
            return newState;
        case UPDATE_STACK:
            newState[action.payload.stackId].currentState = action.payload.update;
            return newState;
        default:
            return state;
    }
}

export default stacks;
