import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions'

const stepsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_STEPS:
        action.steps.forEach((step) => nextState[step.id] = step)
        return nextState;
        case RECEIVE_STEP:
            return Object.assign({}, state, { [action.step.id]: action.step});
        case REMOVE_STEP:
            nextState = Object.assign({}, state);
            delete nextState[action.step.id]
            return nextState
        default:
            return state;
    }

}

export default stepsReducer