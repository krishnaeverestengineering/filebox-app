import * as types from "./actionTypes"

export const getAccessTokenAction = (uid) => {
    return ({type: types.CHECK_SIGNIN, userId: uid});
}

export const authenticateUserAction = (userId) => {
    return ({
        type: types.AUTHENTICATE_USER,
        uid: userId
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

export const onFolderSelected = (id) => {
    return ({ type: types.ON_FOLDER_SELECTED, path: id}
    )
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