import { NEW_HABIT, REMOVE_HABIT, LOG_HABIT, UPDATE_HABIT } from '../actionTypes';

const initialState = {
    '432adfds34': {
        cue: 'at 7:00am',
        action: 'wake up',
        stackKey: 'l23k4j2jd',
        frequency: 'daily',
        log: [
            { date: '08082020', result: 'missed' },
            { date: '07082020', result: 'success' },
        ],
        missManageLog: [
            'cue_setAlarm', 'action_makeItSmaller',
        ]
    },
}

const habits = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case NEW_HABIT:
            return newState;
        case REMOVE_HABIT:
            return newState;
        case LOG_HABIT:
            return newState;
        case UPDATE_HABIT:
            return newState;
        default:
            return state;
    }
}

export default habits;