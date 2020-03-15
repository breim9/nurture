import { createStore } from 'redux';
import rootReducer from './reducers/root.js';

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// export function configureStore(initialState = {}) {
//     const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//     return store;
// }

// export const store = configureStore();