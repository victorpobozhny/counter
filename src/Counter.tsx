import React, {FC, memo} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";

type CounterProps = {
    count: number
    maxValue: number
    minValue: number
    increaseClick: ()=>void
    resetState: ()=>void
    settingMode: boolean
    error: boolean
}

export const Counter: FC<CounterProps> = memo(({count, maxValue, minValue, increaseClick, resetState, settingMode, error}) => {
    console.log('counter')
    return (
        <div className={'counter'}>
            <Screen count={count} maxState={maxValue} settingMode={settingMode} error={error}/>
            <div className={'btnWrapper'}>
                <Button name={'inc'} onClick={increaseClick} disabled={count == maxValue || settingMode || error}/>
                <Button name={'reset'} onClick={resetState} disabled={count == minValue || settingMode || error}/>
            </div>
        </div>
    );
})

