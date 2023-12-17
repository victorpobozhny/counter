import React, {FC} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";

type CounterProps = {
    count: number
    maxValue: number
    startValue: number
    increaseClick: ()=>void
    resetState: ()=>void
}

const Counter: FC<CounterProps> = ({count, maxValue, startValue, increaseClick, resetState}) => {
    return (
        <div className={'counter'}>
            <Screen count={count} maxState={maxValue}/>
            <div className={'btnWrapper'}>
                <Button name={'inc'} onClick={increaseClick} disabled={count == maxValue}/>
                <Button name={'reset'} onClick={resetState} disabled={count == startValue}/>
            </div>
        </div>
    );
};

export default Counter;