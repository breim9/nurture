import { combineReducers } from 'redux';
import { number } from './number';
import habits from './habits';
import stacks from './stacks';
import timeline from './timeline';


const rootReducer = combineReducers({
    number,
    habits,
    stacks,
    timeline
})

export default rootReducer;
