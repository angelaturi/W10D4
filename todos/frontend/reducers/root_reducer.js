import {combineReducers} from 'redux';
import todosReducers from './todos_reducer';
import stepsReducer from './steps_reducer';


const rootReducer = combineReducers({
    todos: todosReducers,
    steps: stepsReducer
}) 

export default rootReducer;