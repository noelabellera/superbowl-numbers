import React from 'react';
import './Button.css'



const Button = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.update}>Randomize Numbers</button>
        </div>
    )
}

export default Button;