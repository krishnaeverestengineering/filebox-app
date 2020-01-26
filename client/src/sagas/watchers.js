import {takeLatest} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { 
    getFilesSaga,
    checkSignInSaga,
    authenticateUserToServerSaga,
    createFolderSaga,
} from "./sagas";

export const watchSagas = function*() {
    yield takeLatest(types.CHECK_SIGNIN, checkSignInSaga);
    yield takeLatest(types.AUTHENTICATE_USER, authenticateUserToServerSaga);
    yield takeLatest(types.GET_FILES, getFilesSaga);
    yield takeLatest(types.CREATE_FOLDER, createFolderSaga);
}