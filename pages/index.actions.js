export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setLoggedIn = loggedIn => ({
    type: SET_LOGGED_IN,
    payload: loggedIn,
})