import { combineReducers } from "redux";

function reducer(state = {},action) {
    if (action.type === 'ADICIONAR') {
        state = action.value
        return {...state};
    } else {
        return state;
    }
}

const reducers = combineReducers({reducer});

export default reducers;