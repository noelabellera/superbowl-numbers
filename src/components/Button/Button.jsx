import React from 'react';



const Button = (props) => {
    return (
        <div>
            <button onClick={props.update}>Randomize Numbers</button>
        </div>
    )
}

export default Button;