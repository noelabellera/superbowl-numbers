import React, { Component } from 'react';
import './Rows.css';
import Button from '../Button/Button';


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    randomizeNumbers = () => {
        this.state.arr.sort(() => Math.random() - 0.5);
        return this.state.arr;
    }

    updateState = () => {
        this.setState({
            arr: this.randomizeNumbers()
        })
    }

    render() {
        return (
            <div>
                <div id="Row">
                    {
                        this.state.arr.map(n => {
                            return <li className="box" key={`number-${n}`}>{n}</li>
                        })
                    }
                </div>
                <Button update={this.updateState}/>
            </div>
        )
    }

}

export default Row;