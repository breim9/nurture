import { ADD } from "./actionTypes";

export const add = (amount) => ({
    type: ADD,
    payload: amount
});
