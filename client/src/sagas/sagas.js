import {put, call} from "redux-saga/effects";
import {getFiles} from "../services/fileSystemService";
import {
    googleSignInInit,
    authenticateUserToServerService,
    checkSignIn,
} from "../services/authenticationService";
import {
    GoogleInitSuccess, 
    authenticateUserResponseAction,
    getFilesResponseAction,
} from "../actions/actions";

export const initGoogleSignIn = function*() {
    try {
        const res = yield call(googleSignInInit);
        yield put(GoogleInitSuccess(res));
    }
    catch(err) {

    }
}

export const checkSignInSaga = function*() {
    try {
        const res = yield call(checkSignIn);
        if(res.ok) {

        }
    }
    catch(e) {

    }
}

export const authenticateUserToServerSaga = function*(params) {
    try {
        const res = yield call(authenticateUserToServerService, params.urlParams);
        yield put(authenticateUserResponseAction(res.data))
    }
    catch(err) {

    }
}

export const createFolderSaga = function*(action) {
    console.log(action)
}

export const getFilesSaga = function*(path) {
    try {
        const response = yield call(getFiles, path)
        yield put(getFilesResponseAction(response.data.files))
    }
    catch(err) {
    }
}