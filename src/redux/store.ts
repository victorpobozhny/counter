import {ActionType, counterReducer} from "./counter-reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {thunk, ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
    void,
    AppRootStateType,
    unknown,
    ActionType
    >


