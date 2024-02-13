import React from 'react';
import Input from "./Input";

type InputsProps = {
    maxValue: number
    minValue: number
    changeRange: (name: string, value: number)=>void
    error: boolean
}

const Inputs = (props: InputsProps) => {


    return (
        <div className={'inputsWrapper'}>
            <Input name={'max value'} value={props.maxValue} changeRange={props.changeRange} error={props.error}/>
            <Input name={'start value'} value={props.minValue} changeRange={props.changeRange} error={props.error}/>
        </div>
    );
};

export default Inputs;