import React from 'react';
import './TextInput.css';

const TextInput = (props) => {
    
    let classList = '';
    let types = ['email'];

    if (types.includes(props.type)) classList += ` TextInput-${props.type} `;

    if (props.large) classList += ` TextInput-large `;
    
    return (
        <input className={classList} placeholder={props.label}/>
    )
}

export default TextInput;