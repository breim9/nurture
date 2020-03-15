import { NEW_HABIT, REMOVE_HABIT, LOG_HABIT, UPDATE_HABIT } from '../actionTypes';

const initialState = {
    '432': {
        cue: 'at 7:00am',
        action: 'wake up',
        stackKey: 'l23k4j2jd',
        frequency: 'daily',
        log: {
            '08082020': 'missed',
            '07082020': 'success',
        },
        missManageLog: [
            'cue_setAlarm', 'action_makeItSmaller',
        ]
    },
}

const habits = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case NEW_HABIT:
            let habitId = Object.keys(action.payload)[0];
            newState[habitId] = action.payload[habitId];
            return newState;
        case REMOVE_HABIT:
            delete newState[action.payload];
            return newState;
        case LOG_HABIT:
            newState[action.payload.habitId].log[action.payload.day] = action.payload.result;
            return newState;
        case UPDATE_HABIT:
            switch (action.payload.updateType) {
                case "cue":
                    newState[action.payload.habitId].cue = action.payload.update;
                    return newState;
                case "action":
                    newState[action.payload.habitId].action = action.payload.update;
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default habits;