import { SET_LOGGED_IN } from './index.actions';

const HOMEPAGE_STATES = {
    loggedIn: 'false',
}

const indexReducer = (state = HOMEPAGE_STATES, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload,
            }
        default:
            return state;
    }
}

export default indexReducer;