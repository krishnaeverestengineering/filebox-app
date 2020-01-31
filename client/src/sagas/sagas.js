import {put, call} from "redux-saga/effects";
import {getFiles, createFolderService, deleteFolderService} from "../services/fileSystemService";
import {
    authenticateUserToServerService,
    getAccessToken,
} from "../services/authenticationService";
import {
    authenticateUserResponseAction,
    getFilesResponseAction,
} from "../actions/actions";
import Emitter from "../helpers/events";

export const checkSignInSaga = function*(action) {
    try {
        const res = yield call(getAccessToken, action.userId);
        localStorage.setItem("token", res.data.access_token);
        const res1 = yield call(authenticateUserToServerService);
        yield put(authenticateUserResponseAction(res1.data))
    }
    catch(e) {

    }
}

export const authenticateUserToServerSaga = function*() {
    try {
        const res = yield call(authenticateUserToServerService);
        //yield put(authenticateUserResponseAction(res.data))
    }
    catch(err) {

    }
}

export const createFolderSaga = function*(action) {
    console.log(action.data.data)
    try {
        const response = yield call(createFolderService, action.data )
        yield put(getFilesResponseAction(response.data.files))
    }
    catch(err) {
    } 
}

export const getFilesSaga = function*(path) {
    try {
        const response = yield call(getFiles, path)
        yield put(getFilesResponseAction(response.data.files))
    }
    catch(err) {
    }
}

export const deleteFileSaga = function*(file) {
    try {
        const response = yield call(deleteFolderService, file)
        if(response.data.ok == true) {
            Emitter.emit("file.deleteSuccess", {})
        }
        //yield put(getFilesResponseAction(response.data.files))
    }
    catch(err) {
    }
}