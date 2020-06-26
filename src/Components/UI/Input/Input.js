import React from 'react';
import classes from './Input.css';

const Input=(props)=>{
    let inputElement=null;

    switch(props.elementType){
        case ('input'):
            inputElement= <input 
            className={classes.InputELement} 
            {...props.elementConfig}
             value={props.value}
                 onChange={props.Changed}
             />;
            break;
        case ('textarea'):
            inputElement=<textarea 
            className={classes.InputELement} 
            {...props.elementConfig}
            
            onChange={props.Changed} value={props.value}
        
             />;
            break;
        case ('select'):
                inputElement=(
                <select 
                className={classes.InputELement} 
                value={props.value}
                onChange={props.Changed}>
                {
                    props.elementConfig.options.map(optionvalue=>(
                        <option key={optionvalue.value} value={optionvalue.value}>{optionvalue.displayValue}</option>
                    ))
                }
                </select>);
                break;
        default:
            inputElement=<input className={classes.InputELement} {...props.elementConfig} value={props.value} />;
    };

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.Label}</label>
            {inputElement}
        </div>

    );
}

export default Input;