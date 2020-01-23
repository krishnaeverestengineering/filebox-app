import {takeLatest} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { 
    getFilesSaga,
    initGoogleSignIn,
    authenticateUserToServerSaga,
    createFolderSaga,
} from "./sagas";

export const watchSagas = function*() {
    yield takeLatest(types.GET_FILES, getFilesSaga);
    yield takeLatest(types.INIT_GOOGLE_SIGNIN, initGoogleSignIn);
    yield takeLatest(types.AUTHENTICATE_USER, authenticateUserToServerSaga);
    yield takeLatest(types.CREATE_FOLDER, createFolderSaga);
}