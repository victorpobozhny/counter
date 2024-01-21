import React, {FC, memo} from 'react';
import {Button} from "./Button";
import Inputs from "./Inputs";

type SettingsProps = {
    maxValue: number
    startValue: number
    setRange: () => void
    changeRange: (name: string, value: number) => void
    error: boolean
    settingMode: boolean
}

export const Settings: FC<SettingsProps> = memo(({
                                                     maxValue,
                                                     startValue,
                                                     setRange, changeRange,
                                                     error,
                                                     settingMode
                                                 }) => {
    console.log('settings')
    const onClickHandler = () => {
        setRange()
    }


    return (
        <div className={'settings'}>
            <Inputs maxValue={maxValue} startValue={startValue} changeRange={changeRange} error={error}/>
            <div className={'btnWrapper'}>
                <Button name={'set'} onClick={onClickHandler} disabled={!settingMode || error}/>
            </div>
        </div>
    );
})
