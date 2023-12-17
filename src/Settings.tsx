import React, {FC} from 'react';
import {Button} from "./Button";
import Inputs from "./Inputs";

type SettingsProps = {
    maxValue: number
    startValue: number
    setRange: () => void
    changeValues: (name: string, value: number)=>void
}


const Settings: FC<SettingsProps> = ({maxValue, startValue, setRange, changeValues}) => {

    const onClickHandler = () => {
        setRange()
    }


    return (
        <div className={'settings'}>
            <Inputs maxValue={maxValue} startValue={startValue} changeValues={changeValues}/>
            <div className={'btnWrapper'}>
                <Button name={'set'} onClick={onClickHandler} disabled={false}/>
            </div>
        </div>
    );
};

export default Settings;