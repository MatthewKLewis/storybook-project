import React from 'react';
import './Input.css';

const Input = (props) => {
    
    let element;

    if (props.type === 'text') {
        element = 
            <div className="Input TextInput">
                <label for="text">{props.label}</label>
                <input id="text" placeholder={props.placeholder}/>
            </div>
    }

    if (props.type === 'select') {
        element = 
            <div className="Input SelectInput">

                <select name="menu" id="menu">
                    <option value="apples">Apples</option>
                    <option value="oranges">Oranges</option>
                    <option value="bananas">Bananas</option>
                </select>

            </div>
    }

    if (props.type === 'number') {
        element = 
            <div>
                <input className="NumberInput" type="number" id="number" name="number" placeholder={props.value} min={props.min} max={props.max}></input>
            </div>
    }

    if (props.type === 'button') {
        element = 
            <div className="Input ButtonInput">
                <input type="text" id="button" name="button"></input>
                <button className='inline'>Click</button>
            </div>
    }

    if (props.type === 'check') {
        element = 
            <div className="">
                <input type="checkbox"></input>
            </div>
    }

    
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    )
}

export default Input;