import React, {FC, memo} from 'react';
import {Button} from "./Button";
import Inputs from "./Inputs";

type SettingsProps = {
    maxValue: number
    minValue: number
    setRange: () => void
    changeRange: (name: string, value: number) => void
    error: boolean
    settingMode: boolean
}

export const Settings: FC<SettingsProps> = memo(({
                                                     maxValue,
                                                     minValue,
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
            <Inputs maxValue={maxValue} minValue={minValue} changeRange={changeRange} error={error}/>
            <div className={'btnWrapper'}>
                <Button name={'set'} onClick={onClickHandler} disabled={!settingMode || error}/>
            </div>
        </div>
    );
})
