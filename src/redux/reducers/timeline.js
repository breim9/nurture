import { ADD_NEW_DAY, UPDATE_DAY_RESULT, VIEW_SELECTED_DAY } from '../actionTypes';

const initialState = {
    '08082020': { UIDayName: 'Tue', UIDate: '08', result: '' },
    '07082020': { UIDayName: 'Mon', UIDate: '07', result: 'success' }
}

const timeline = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case ADD_NEW_DAY:
            return newState;
        case UPDATE_DAY_RESULT:
            return newState;
        case VIEW_SELECTED_DAY:
            return newState;
        default:
            return state;
    }
}

export default timeline;