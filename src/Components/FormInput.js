import { useState } from 'react';
import classes from './FormInput.module.css'
const FormInput = (props) => {
    const [focus,setFocus]=useState(false);
    const { label, errorMessage,onChange, id, ...inputProps } = props;

    const onblurHandler=(event)=>
    {
        setFocus(true);
    };

    return (
        <div className={classes.formInput}>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={onblurHandler} 
            onFocus={()=>inputProps.name==="confirmPassword" && setFocus(true)}
            focused={focus.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;