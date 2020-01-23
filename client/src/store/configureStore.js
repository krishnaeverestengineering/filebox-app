import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, combineReducers} from "redux";
import rootReducer from "../reducers/";
import rootSaga from "../sagas"

export default () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga),
    }
}