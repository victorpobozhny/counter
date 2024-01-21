const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    commonError: false,
    settingMode: true
}
export type StateType = {
    startValue: number
    maxValue: number
    count: number
    commonError: boolean
    settingMode: boolean
}
export type ActionType =
    SetStartValueACType
    | SetMaxValueACType
    | SetCountACType
    | SetCommonErrorACType
    | SetSettingModeACType
type SetStartValueACType = ReturnType<typeof setStartValueAC>
type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
type SetCountACType = ReturnType<typeof setCountAC>
type SetCommonErrorACType = ReturnType<typeof setCommonErrorAC>
type SetSettingModeACType = ReturnType<typeof setSettingModeAC>


export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "SET-COUNT":
            return {...state, count: action.payload.count}
        case "SET-START-VALUE":
            return {...state, startValue: action.payload.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.payload.value}
        case "SET-COMMON-ERROR":
            return {...state, commonError: action.payload.value}
        case "SET-SETTING-MODE":
            return {...state, settingMode: action.payload.value}
        default:
            return state
    }
}


export const setStartValueAC = (value: number) => {
    return {
        type: "SET-START-VALUE",
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
export const setCommonErrorAC = (value: boolean) => {
    return {
        type: "SET-COMMON-ERROR",
        payload: {
            value
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
