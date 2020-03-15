import {
    ADD,
    NEW_HABIT,
    REMOVE_HABIT,
    LOG_HABIT,
    UPDATE_HABIT,
    NEW_STACK,
    REMOVE_STACK,
    UPDATE_STACK,
    TOGGLE_STACK,
    ADD_NEW_DAY,
    UPDATE_DAY_RESULT,
    VIEW_SELECTED_DAY
} from "./actionTypes";


export const add = (amount) => ({
    type: ADD,
    payload: amount
});

export const newHabit = (habit) => ({
    type: NEW_HABIT,
    payload: habit,
});

export const removeHabit = (habit) => ({
    type: REMOVE_HABIT,
    payload: habit
});

export const logHabit = (habitId, day, result) => ({
    type: LOG_HABIT,
    payload: {
        habitId,
        day,
        result
    }
});

export const updateHabit = (habitId, updateType, update) => ({
    type: UPDATE_HABIT,
    payload: {
        habitId,
        updateType,
        update
    }
});

export const newStack = (stack) => ({
    type: NEW_STACK,
    payload: stack,
});

export const removeStack = (stack) => ({
    type: REMOVE_STACK,
    payload: stack
});

export const updateStack = (stackId, update) => ({
    type: UPDATE_STACK,
    payload: {
        stackId,
        update
    }
});

export const toggleStack = (stackId) => ({
    type: TOGGLE_STACK,
    payload: {
        stackId
    }
});

export const addNewDay = () => ({
    type: ADD_NEW_DAY
});

export const updateDayResult = (day, result) => ({
    type: UPDATE_DAY_RESULT,
    payload: {
        day,
        result
    }
});

export const viewSelectedDay = (day) => ({
    type: VIEW_SELECTED_DAY,
    payload: day
});



