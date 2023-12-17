import React, {ChangeEvent, useEffect, useState} from 'react';

type InputProps = {
    name: string
    value: number
    changeValues: (name: string, value: number) => void
}

const Input = (props: InputProps) => {

    const [value, setValue] = useState(props.value)
    useEffect(() => {
        props.changeValues(props.name, value)
    }, [value])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }
    return (
        <div className={'inputItem'}>
            <div className={'inputName'}>
                {props.name}
            </div>
            <div className={'input'}>
                <input type={"number"} value={props.value} onChange={onChangeHandler}/>
            </div>
        </div>
    );
};

export default Input;