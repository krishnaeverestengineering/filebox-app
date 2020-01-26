import * as types from "../actions/actionTypes";

const DASHBAORD_INTIAL_STATE = {
    folders: [],
    path: "/",
    loading: false,
};

const SIGNIN_INITIAL_STATE = {
    isSignedIn : false,
}

export const signInReducers = (state = SIGNIN_INITIAL_STATE, action) => {
    switch(action.type) {
        case types.AUTHENTICATE_USER_RESPONSE:
            console.log(action.response)
            return Object.assign({}, state, {
                isSignedIn: action.response.is_authenticated,
                currentPath: action.response.path
            })
        default:
            return state;
    }
}

export const filesDashboardReducers = (state = DASHBAORD_INTIAL_STATE, action) => {
    switch(action.type) {
        case types.AUTHENTICATE_USER_RESPONSE:
            return Object.assign({}, state, {
                currentPath: action.response.path
            })
        case types.GET_FILES:
            return Object.assign({}, state, {
                loading: true,
              })
        case types.GET_FILES_RESPONSE:
        return Object.assign({}, state, {
            folders: action.data,
            })
        default:
            return state;
    }
}