import React from 'react';



const Button = (props) => {
    return (
        <div>
            <button onClick={props.updateState}>Randomize Numbers</button>
        </div>
    )
}

export default Button;