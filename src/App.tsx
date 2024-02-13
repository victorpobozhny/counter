import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {
    changeRangeTC,
    checkForErrorTC,
    increaseClickTC,
    setCountAC,
    setRangeTC,
    setStateTC,
    StateType
} from "./redux/counter-reducer";

function App() {
    console.log('rendering')
    const dispatch = useAppDispatch()
    const state = useAppSelector<StateType>(state => state.counter)


    // один раз вызыввем useEffect и присваиваем максимальные и минимальные значения взяв их из localstorage если есть
    useEffect(() => {
        dispatch(setStateTC())
    }, [])


    const checkForError = (min: number, max: number) => {
        dispatch(checkForErrorTC(min, max))
    }

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