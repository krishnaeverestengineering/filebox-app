import { watchSagas } from "./watchers";
import {fork, put} from "redux-saga/effects";
import {InitGoogleSignIn} from "../actions/actions"

export default function*() {
    yield fork(watchSagas);
    yield put(InitGoogleSignIn());
}