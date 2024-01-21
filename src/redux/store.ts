import {counterReducer} from "./counter-reducer";
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>