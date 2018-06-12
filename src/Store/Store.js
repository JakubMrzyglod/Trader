import {createStore} from 'redux';
import reducers from "./Reducers.js";

export const Store = createStore(reducers);