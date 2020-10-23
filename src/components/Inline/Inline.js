import React from 'react';
import './Inline.css';

const Inline = (props) => {
    
    let classList = '';
    let types = ['email'];

    if (types.includes(props.type)) classList += ` Inline-${props.type} `;

    if (props.large) classList += ` Inline-large `;
    
    return (
        <div className={classList}>
            <p>INLINE</p>
        </div> 
    )
}

export default Inline;