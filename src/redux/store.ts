import {ActionType, counterReducer} from "./counter-reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {thunk, ThunkAction} from "redux-thunk";
import {loadState, saveState} from "../utils/counter-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


const persistedState = loadState();

export const store = legacy_createStore(rootReducer,persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
       counter: {
           minValue: store.getState().counter.minValue,
           maxValue: store.getState().counter.maxValue,
           count: store.getState().counter.count,
           commonError: store.getState().counter.commonError,
           settingMode: store.getState().counter.settingMode
       }
    });
});






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


