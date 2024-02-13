import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {changeRangeTC, increaseClickTC, setCountAC, setRangeTC, StateType} from "./redux/counter-reducer";

function App() {
    console.log('rendering')
    const dispatch = useAppDispatch()
    const state = useAppSelector<StateType>(state => state.counter)

    //функция изменения наших вводимых значений без добавления в localstorage
    const changeRange = (name: string, value: number) => {
        dispatch(changeRangeTC(name, value))
    }
    //функция установки наших значений в localstorage, также выключает режим настройки и сбрасывает счетчик на нновое мин значение
    const setRange = () => {
        dispatch(setRangeTC())
    }
    //клик который увеличивает число на экране
    const increaseClick = () => {
        dispatch(increaseClickTC())
    }

    //сброс значчения на экране
    const resetState = () => {
        dispatch(setCountAC(state.minValue))
    }

    return (
        <div className="App">
            <Settings
                minValue={state.minValue}
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
                minValue={state.minValue}
                settingMode={state.settingMode}
                error={state.commonError}
            />
        </div>
    );
}

export default App;