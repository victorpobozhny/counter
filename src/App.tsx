import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Screen} from "./Screen";

function App() {

    const minState = 0
    const maxState = 5

    const [count, setCount] = useState<number>(minState)


    const increaseClick = () => {
        if (count < maxState) {
            setCount(count + 1)
        }
    }
    const resetState = () => {
        setCount(minState)
    }

    return (
        <div className="App">
            <div className={'counter'}>
                <Screen count={count}/>
                <div className={'btnWrapper'}>
                    <Button name={'inc'} onClick={increaseClick} disabled={count == maxState}/>
                    <Button name={'reset'} onClick={resetState} disabled={count == minState}/>
                </div>
            </div>
        </div>
    );
}

export default App;