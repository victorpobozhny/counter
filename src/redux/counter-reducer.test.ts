import {counterReducer, setCountAC, setMaxValueAC, setStartValueAC, StateType} from "./counter-reducer";

let initialState: StateType
beforeEach(() => {
    initialState = {
        minValue: 0,
        maxValue: 5,
        count: 0,
        commonError: false,
        settingMode: true
    }
})

test('count should change', () => {
    const startState = initialState
    const action = setCountAC(1)
    const finalState = counterReducer(startState, action)

    expect(startState.count).toBe(0)
    expect(finalState.count).toBe(1)
    expect(startState.minValue).toBe(finalState.minValue)
    expect(startState.maxValue).toBe(finalState.maxValue)
    expect(startState.commonError).toBe(finalState.commonError)
    expect(startState.settingMode).toBe(finalState.settingMode)
})

test('startValue should change', () => {
    const startState = initialState
    const action = setStartValueAC(1)
    const finalState = counterReducer(startState, action)

    expect(startState.minValue).toBe(0)
    expect(finalState.minValue).toBe(1)
    expect(startState.count).toBe(finalState.count)
    expect(startState.maxValue).toBe(finalState.maxValue)
    expect(startState.commonError).toBe(finalState.commonError)
    expect(startState.settingMode).toBe(finalState.settingMode)
})

test('maxValue should change', () => {
    const startState = initialState
    const action = setMaxValueAC(1)
    const finalState = counterReducer(startState, action)

    expect(startState.maxValue).toBe(5)
    expect(finalState.maxValue).toBe(1)
    expect(startState.count).toBe(finalState.count)
    expect(startState.minValue).toBe(finalState.minValue)
    expect(startState.commonError).toBe(finalState.commonError)
    expect(startState.settingMode).toBe(finalState.settingMode)
})
