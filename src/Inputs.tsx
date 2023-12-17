import React from 'react';
import Input from "./Input";

type InputsProps = {
    maxValue: number
    startValue: number
    changeValues: (name: string, value: number)=>void
}

const Inputs = (props: InputsProps) => {


    return (
        <div className={'inputsWrapper'}>
            <Input name={'max value'} value={props.maxValue} changeValues={props.changeValues}/>
            <Input name={'start value'} value={props.startValue} changeValues={props.changeValues}/>
        </div>
    );
};

export default Inputs;