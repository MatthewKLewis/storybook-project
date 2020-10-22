import React from 'react';
import './Button.css';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    
    let classList = '';

    if (props.type.includes('primary')) classList += ` button-${props.type} `
    if (props.type.includes('secondary')) classList += ` button-${props.type} `
    if (props.type.includes('tertiary')) classList += ` button-${props.type} `

    if (props.large) classList += ` button-large `
    
    return (
        <button onClick={props.onClick} className={classList}>
            {props.label}
        </button>
    )
}

export default Button;