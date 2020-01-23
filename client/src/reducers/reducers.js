import * as types from "../actions/actionTypes";

const DASHBAORD_INTIAL_STATE = {
    folders: [],
    path: "/",
    loading: false,
};

const SIGNIN_INITIAL_STATE = {
    auth: null,
    isSignedIn : false,
    redirectionUrl: null
}

export const signInReducers = (state = SIGNIN_INITIAL_STATE, action) => {
    switch(action.type) {
        case types.CHECK_SIGNIN:
            return Object.assign({}, state, {
            })
        case types.SET_REDIRECT_URL:
            console.log(action.redirectionUrl)
            return Object.assign({}, state, {
                redirectionUrl: action.redirectionUrl,
            })
        case types.INIT_GOOGLE_SIGNIN:
            return Object.assign({}, state, {
              })
        case types.GOOGLE_INIT_SUCCESS:
            return Object.assign({}, state, {
                auth: action.authObj
            })
        case types.START_GOOGLE_SIGNIN:
            return Object.assign({}, state, {
            })
        case types.SUCCESS_GOOGLE_SIGNIN:
            return Object.assign({}, state, {
                isSignedIn: state.auth.isSignedIn.get(),
            })
        case types.FAILED_GOOGLE_SIGNIN:
            return Object.assign({}, state, {
                isSignedIn: false,
            })
        case types.AUTHENTICATE_USER_RESPONSE:
            console.log(action.response)
            return Object.assign({}, state, {
                isSignedIn: action.response.is_authenticated
            })
        default:
            return state;
    }
}

export const filesDashboardReducers = (state = DASHBAORD_INTIAL_STATE, action) => {
    switch(action.type) {
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