import React from 'react';
import './Button.css';

const Button = (props) => {
    
    //Images
    let classList = '';
    let types = ['primary', 'danger', 'warning', 'success', 'default']

    if (types.includes(props.type)) classList += ` button-${props.type} `;

    if (props.large) classList += ` button-large `
    if (props.deactivated) classList += ` button-deactivated `
    if (props.outline) classList += ` button-outline `

    //if (props.cart) 
    //if (props.favorite) 
    
    return (
        <button onClick={props.onClick} className={classList}>
            {props.label}
        </button>
    )
}

export default Button;