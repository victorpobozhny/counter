import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Settings from "./Settings";

function App() {



    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStartValue(newValue)
        }
        let MaxValueAsString = localStorage.getItem('maxValue')
        if (MaxValueAsString) {
            let newValue = JSON.parse(MaxValueAsString)
            setMaxValue(newValue)
        }
    }, [])

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)


    const [count, setCount] = useState<number>(startValue)
    const changeValues = (name: string, value: number) => {
        name == 'max value' ? setMaxValue(value) : setStartValue(value)

    }
    const setRange = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    const increaseClick = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const resetState = () => {
        setCount(startValue)
    }

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setRange={setRange}
                changeValues={changeValues}
            />

            <Counter
                count={count}
                maxValue={maxValue}
                resetState={resetState}
                increaseClick={increaseClick}
                startValue={startValue}
            />


        </div>
    );
}

export default App;