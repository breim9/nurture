import { NEW_HABIT, REMOVE_HABIT, LOG_HABIT, UPDATE_HABIT } from '../actionTypes';


// ! Log Habit does not consider the day. This assumes when I get into day-related code I handle currentState to refer to whatever day is selected.
// Some code additions will need to happen.


const initialState = {
    '183': {
        cue: 'then',
        action: 'go to work',
        stackKey: 'stk01',
        order: 2,
        frequency: 'daily',
        currentState: 'incomplete',
        log: {
            '08082020': 'missed',
            '07082020': 'success',
        },
        missManageLog: []
    },
    '542': {
        cue: 'then',
        action: 'pushups',
        stackKey: 'stk01',
        order: 1,
        frequency: 'daily',
        currentState: 'incomplete',
        log: {
            '08082020': 'missed',
            '07082020': 'success',
        },
        missManageLog: []
    },
    '432': {
        cue: 'at 7:00am',
        action: 'wake up',
        stackKey: 'stk01',
        order: 0,
        frequency: 'daily',
        currentState: 'incomplete',
        log: {
            '08082020': 'missed',
            '07082020': 'success',
        },
        missManageLog: [
            'cue_setAlarm', 'action_makeItSmaller',
        ]
    },
    '4j3': {
        cue: 'then',
        action: 'jog 2km',
        stackKey: 'stk02',
        frequency: 'daily',
        currentState: 'incomplete',
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
            //newState[action.payload.habitId].log[action.payload.day] = action.payload.result;
            newState[action.payload.habitId].currentState = action.payload.result;
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