import React from 'react';
import './Rows.css';


const Row = (props) => {
    // const nums = [0,1,2,3,4,5,6,7,8,9]
    console.log(props);
    return (
        <div id="Row">
            {
                props.nums.map(n => {
                    return <li className="box" key={`number-${n}`}>{n}</li>
                })
            }
        </div>
    )
}

export default Row;