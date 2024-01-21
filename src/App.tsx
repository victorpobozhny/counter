import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    setCommonErrorAC,
    setCountAC,
    setMaxValueAC,
    setSettingModeAC,
    setStartValueAC,
    StateType
} from "./redux/counter-reducer";

function App() {
    console.log('rendering')
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, StateType>(state => state.counter)


    // один раз вызыввем useEffect и присваиваем максимальные и минимальные значения взяв их из localstorage если есть
    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            dispatch(setStartValueAC(newValue))
            resetState()
        }
        let MaxValueAsString = localStorage.getItem('maxValue')
        if (MaxValueAsString) {
            let newValue = JSON.parse(MaxValueAsString)
            dispatch(setMaxValueAC(newValue))
        }
    }, [])


    const checkForError = (min: number, max: number) => {
        if (min >= max || min < 0) {
            dispatch(setCommonErrorAC(true))
        } else {
            dispatch(setCommonErrorAC(false))
        }
    }

    //функция изменения наших вводимых значений без добавления в localstorage
    const changeRange = (name: string, value: number) => {
        if (name == 'max value') {
            checkForError(state.startValue, state.maxValue)
            dispatch(setMaxValueAC(value))
        } else {
            checkForError(value, state.maxValue)
            dispatch(setStartValueAC(value))
        }
        dispatch(setSettingModeAC(true))
    }
    //функция установки наших значений в localstorage, также выключает режим настройки и сбрасывает счетчик на нновое мин значение
    const setRange = () => {
        if (!state.commonError) {
            localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
            localStorage.setItem('startValue', JSON.stringify(state.startValue))
            dispatch(setSettingModeAC(false))
            resetState()
        }
    }
    //клик который увеличивает число на экране
    const increaseClick = () => {
        if (state.count < state.maxValue) {
            dispatch(setCountAC(state.count + 1))
        }
    }

    //сброс значчения на экране
    const resetState = () => {
        dispatch(setCountAC(state.startValue))
    }

    return (
        <div className="App">
            <Settings
                startValue={state.startValue}
                maxValue={state.maxValue}
                setRange={setRange}
                changeRange={changeRange}
                error={state.commonError}
                settingMode={state.settingMode}
            />


            <Counter
                count={state.count}
                maxValue={state.maxValue}
                resetState={resetState}
                increaseClick={increaseClick}
                startValue={state.startValue}
                settingMode={state.settingMode}
                error={state.commonError}
            />
        </div>
    );
}

export default App;