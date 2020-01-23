import * as types from "./actionTypes"

export const checkSignIn = () => {
    return ({type: types.CHECK_SIGNIN});
}

export const setRedirectUrl = (url) => {
    console.log(url)
    return ({
        type: types.SET_REDIRECT_URL,
        redirectionUrl : url
    })
}

export const authenticateUserAction = (params) => {
    return ({
        type: types.AUTHENTICATE_USER,
        urlParams: params
    });
}

export const authenticateUserResponseAction = (data) => {
    return ({
        type: types.AUTHENTICATE_USER_RESPONSE,
        response: data,
    });
}


export const InitGoogleSignIn = () => {
    return({type: types.INIT_GOOGLE_SIGNIN})
}

export const StartGoogleSignIn = () => {
    return({type: types.START_GOOGLE_SIGNIN});
}

export const GoogleInitSuccess = (auth) => {
    return ({type: types.GOOGLE_INIT_SUCCESS, authObj: auth})
}

export const getFiles = (path) => {
    return (
        {
            type: types.GET_FILES,
            dir: path,
        }
    )
}

export const getFilesResponseAction = (files) => {
    return (
        {
            type: types.GET_FILES_RESPONSE,
            data: files,
        }
    )
}

export const createFolderAction = (file) => {
    console.log(file)
    return ({
        type: types.CREATE_FOLDER,
        data: file,
    })
}