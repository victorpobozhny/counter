import {AppRootStateType, AppThunk} from "./store";

const initialState: StateType = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    commonError: false,
    settingMode: true
}
export type StateType = {
    minValue: number
    maxValue: number
    count: number
    commonError: boolean
    settingMode: boolean
}
export type ActionType =
    SetStartValueACType
    | SetMaxValueACType
    | SetCountACType

    | SetSettingModeACType
|ReturnType<typeof checkForErrorAC>
type SetStartValueACType = ReturnType<typeof setStartValueAC>
type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
type SetCountACType = ReturnType<typeof setCountAC>

type SetSettingModeACType = ReturnType<typeof setSettingModeAC>


export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "SET-COUNT":
            return {...state, count: action.payload.count}
        case "SET-MIN-VALUE":
            return {...state, minValue: action.payload.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.payload.value}
        case "SET-SETTING-MODE":
            return {...state, settingMode: action.payload.value}
        case "CHECK-FOR-ERROR":
             if (action.payload.min >= action.payload.max || action.payload.min < 0){
                 return {...state, commonError: true}
             } else return {...state, commonError: false}

        default:
            return state
    }
}


export const setStartValueAC = (value: number) => {
    return {
        type: "SET-MIN-VALUE",
        payload: {
            value
        }
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: {
            value
        }
    } as const
}
export const setCountAC = (count: number) => {
    return {
        type: "SET-COUNT",
        payload: {
            count
        }
    } as const
}
export const setSettingModeAC = (value: boolean) => {
    return {
        type: "SET-SETTING-MODE",
        payload: {
            value
        }
    } as const
}

export const checkForErrorAC = (min: number, max: number)=>
{
    return {
        type: "CHECK-FOR-ERROR",
        payload: {min, max}
    } as const
}

export const changeRangeTC = (name: string, value: number): AppThunk=>
    (dispatch,
    getState: ()=>AppRootStateType) => {
        if (name == 'max value') {
            dispatch(checkForErrorAC(getState().counter.minValue, value))
            dispatch(setMaxValueAC(value))
        } else {
            dispatch(checkForErrorAC(value, getState().counter.maxValue))
            dispatch(setStartValueAC(value))
        }
        dispatch(setSettingModeAC(true))
    }

export const increaseClickTC = (): AppThunk=>
    (dispatch,
     getState: ()=>AppRootStateType)=>{
        if (getState().counter.count < getState().counter.maxValue) {
            dispatch(setCountAC(getState().counter.count + 1))
        }
    }

export const setStateTC = (): AppThunk=> (
    dispatch,
    getState: ()=>AppRootStateType)=>{
    let state = localStorage.getItem('counter')
    if (state) {
        const stateObj = JSON.parse(state)
        dispatch(setMaxValueAC(JSON.parse(stateObj.maxValue)))
        dispatch(setStartValueAC(JSON.parse(stateObj.minValue)))
        dispatch(setCountAC(getState().counter.minValue))
    }
}

export const setRangeTC = (): AppThunk => (
    dispatch,
    getState: ()=>AppRootStateType) => {
    if (!getState().counter.commonError) {
        localStorage.setItem('counter', JSON.stringify({maxValue: getState().counter.maxValue, minValue: getState().counter.minValue}))
        dispatch(setSettingModeAC(false))
        dispatch(setCountAC(getState().counter.minValue))
    }
}
