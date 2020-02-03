import {takeLatest} from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { 
    getFilesSaga,
    checkSignInSaga,
    authenticateUserToServerSaga,
    createFolderSaga,
    deleteFileSaga,
    getTextFileContentSaga,
    editFileContentSaga,
} from "./sagas";

export const watchSagas = function*() {
    yield takeLatest(types.CHECK_SIGNIN, checkSignInSaga);
    yield takeLatest(types.AUTHENTICATE_USER, authenticateUserToServerSaga);
    yield takeLatest(types.GET_FILES, getFilesSaga);
    yield takeLatest(types.CREATE_FOLDER, createFolderSaga);
    yield takeLatest(types.DELETE_FOLDER, deleteFileSaga);
    yield takeLatest(types.GET_FILE_CONTENT, getTextFileContentSaga);
    yield takeLatest(types.EDIT_FILE_CONTENT, editFileContentSaga);
}