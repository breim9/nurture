import { NEW_STACK, REMOVE_STACK, UPDATE_STACK } from '../actionTypes';

const initialState = {
    'l23k4j2jd': {
        name: 'Morning Routine',
        frequency: 'daily',
        habitKeys: ['432adfds34',],
        nextHabitInStackToDo: 'At 7:00am - Jog 2km',
        log: [
            { date: '08082020', result: 'missed' },
        ]
    },
}

const stacks = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case NEW_STACK:
            return newState;
        case REMOVE_STACK:
            return newState;
        case UPDATE_STACK:
            return newState;
        default:
            return state;
    }
}

export default stacks;
